import * as THREE from '../vendor/three/three.module.min.js';

const explorer = document.querySelector('[data-module-explorer]');

if (explorer) {
    const canvas = explorer.querySelector('[data-module-canvas]');
    const stage = explorer.querySelector('[data-module-stage]');
    const fallback = explorer.querySelector('[data-module-fallback]');
    const navigation = explorer.querySelector('[data-module-navigation]');
    const detail = explorer.querySelector('[data-module-detail]');
    const detailType = detail.querySelector('[data-detail-type]');
    const detailIndex = detail.querySelector('[data-detail-index]');
    const detailTitle = detail.querySelector('[data-detail-title]');
    const detailDescription = detail.querySelector('[data-detail-description]');
    const detailStatus = detail.querySelector('[data-detail-status]');
    const liveRegion = explorer.querySelector('[data-module-live]');
    const backButton = explorer.querySelector('[data-module-back]');
    const resetButton = explorer.querySelector('[data-module-reset]');
    const modeLabels = explorer.querySelectorAll('[data-module-mode]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const state = {
        data: null,
        selectedModule: null,
        selectedSlice: null,
        hoveredObject: null,
        interactiveObjects: [],
        moduleMeshes: [],
        sliceMeshes: [],
        animationFrame: null,
        visible: true,
        pointer: new THREE.Vector2(2, 2),
        raycaster: new THREE.Raycaster()
    };

    const showFallback = (message) => {
        stage.hidden = true;
        fallback.hidden = false;
        fallback.querySelector('p').textContent = message;
    };

    const canUseWebGL = () => {
        try {
            const probe = document.createElement('canvas');
            return Boolean(probe.getContext('webgl2'));
        } catch {
            return false;
        }
    };

    const setDetail = ({ type, index, name, description, status }) => {
        detailType.textContent = type;
        detailIndex.textContent = index;
        detailTitle.textContent = name;
        detailDescription.textContent = description;
        detailStatus.textContent = status || 'Content under development';
        detail.hidden = false;
    };

    const clearDetail = () => {
        detail.hidden = true;
    };

    const setHash = (value) => {
        const nextUrl = `${window.location.pathname}${window.location.search}${value ? `#${value}` : ''}`;
        window.history.replaceState(null, '', nextUrl);
    };

    const disposeMeshes = (meshes) => {
        meshes.forEach((mesh) => {
            mesh.parent?.remove(mesh);
            mesh.geometry.dispose();
            mesh.material.dispose();
        });
        meshes.length = 0;
    };

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a080a, 0.052);
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(5.8, 2.9, 10.5);
    camera.lookAt(0, 0.2, 0);

    let renderer;
    try {
        renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
        renderer.setClearColor(0x0a080a, 0);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
    } catch {
        showFallback('The interactive view could not start here. Use the complete module list beside it instead.');
    }

    const ambient = new THREE.HemisphereLight(0xf7ddb0, 0x24151b, 1.5);
    scene.add(ambient);
    const keyLight = new THREE.DirectionalLight(0xffd58a, 3.4);
    keyLight.position.set(4, 7, 7);
    scene.add(keyLight);
    const rimLight = new THREE.PointLight(0xb64233, 24, 18, 2);
    rimLight.position.set(-4, 0, 4);
    scene.add(rimLight);

    const platform = new THREE.Mesh(
        new THREE.CylinderGeometry(2.55, 2.8, 0.22, 64),
        new THREE.MeshStandardMaterial({ color: 0x21171a, roughness: 0.8, metalness: 0.45 })
    );
    platform.position.y = -2.18;
    scene.add(platform);

    const rings = new THREE.Mesh(
        new THREE.TorusGeometry(2.22, 0.018, 8, 96),
        new THREE.MeshBasicMaterial({ color: 0xd8ae62, transparent: true, opacity: 0.45 })
    );
    rings.rotation.x = Math.PI / 2;
    rings.position.y = -2.04;
    scene.add(rings);

    const makeMaterial = (colour, isSlice = false) => new THREE.MeshStandardMaterial({
        color: new THREE.Color(colour),
        emissive: new THREE.Color(colour).multiplyScalar(0.08),
        metalness: isSlice ? 0.42 : 0.55,
        roughness: isSlice ? 0.45 : 0.36
    });

    const createModuleMeshes = () => {
        disposeMeshes(state.sliceMeshes);
        disposeMeshes(state.moduleMeshes);
        const count = state.data.modules.length;

        state.data.modules.forEach((module, position) => {
            const mesh = new THREE.Mesh(
                new THREE.CylinderGeometry(1.72 - position * 0.035, 1.76 - position * 0.035, 0.42, 64, 1),
                makeMaterial(module.colour)
            );
            mesh.position.set(0, (count - 1) * 0.28 - position * 0.56 - 0.15, 0);
            mesh.rotation.y = position * 0.16;
            mesh.userData = { kind: 'module', item: module, homeY: mesh.position.y, targetZ: 0 };
            scene.add(mesh);
            state.moduleMeshes.push(mesh);
        });
        state.interactiveObjects = state.moduleMeshes;
    };

    const createSliceMeshes = (module) => {
        disposeMeshes(state.sliceMeshes);
        state.moduleMeshes.forEach((mesh) => {
            mesh.userData.targetX = mesh.userData.item.id === module.id ? -1.55 : -4.5;
            mesh.userData.targetZ = mesh.userData.item.id === module.id ? -0.6 : -2.5;
            mesh.userData.targetOpacity = mesh.userData.item.id === module.id ? 0.22 : 0;
            mesh.material.transparent = true;
        });

        const gap = Math.min(0.78, 3.4 / module.slices.length);
        module.slices.forEach((slice, position) => {
            const mesh = new THREE.Mesh(
                new THREE.CylinderGeometry(1.34, 1.4, 0.27, 64, 1),
                makeMaterial(module.colour, true)
            );
            const y = ((module.slices.length - 1) * gap) / 2 - position * gap;
            mesh.position.set(1.45, y, 0.45);
            mesh.scale.setScalar(0.001);
            mesh.userData = { kind: 'slice', item: slice, module, homeY: y, targetScale: 1, targetZ: 0.45 };
            scene.add(mesh);
            state.sliceMeshes.push(mesh);
        });
        state.interactiveObjects = state.sliceMeshes;
    };

    const renderNavigation = (items, type) => {
        navigation.replaceChildren();
        items.forEach((item) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'module-explorer__choice';
            button.dataset.itemId = item.id;
            button.setAttribute('aria-pressed', 'false');
            button.innerHTML = `<span>${item.index}</span><strong>${item.name}</strong><small>${type === 'module' ? item.slices.length + ' provisional Slices' : 'Content under development'}</small>`;
            button.addEventListener('mouseenter', () => setHoveredById(item.id));
            button.addEventListener('mouseleave', () => setHoveredById(null));
            button.addEventListener('focus', () => setHoveredById(item.id));
            button.addEventListener('click', () => type === 'module' ? selectModule(item) : selectSlice(item));
            navigation.append(button);
        });
    };

    const updateSelectedChoice = (id) => {
        navigation.querySelectorAll('button').forEach((button) => {
            button.setAttribute('aria-pressed', String(button.dataset.itemId === id));
        });
    };

    const setHoveredById = (id) => {
        state.hoveredObject = state.interactiveObjects.find((object) => object.userData.item.id === id) || null;
        canvas.style.cursor = state.hoveredObject ? 'pointer' : 'grab';
    };

    const selectModule = (module, { updateHash = true } = {}) => {
        state.selectedModule = module;
        state.selectedSlice = null;
        modeLabels.forEach((label) => { label.textContent = `${module.index} / ${module.name}`; });
        backButton.hidden = false;
        resetButton.hidden = false;
        createSliceMeshes(module);
        renderNavigation(module.slices, 'slice');
        setDetail({
            type: 'Module',
            index: module.index,
            name: module.name,
            description: module.shortDescription,
            status: module.status
        });
        liveRegion.textContent = `${module.name} opened. ${module.slices.length} provisional Slices available.`;
        if (updateHash) setHash(module.id);
    };

    const selectSlice = (slice, { updateHash = true } = {}) => {
        state.selectedSlice = slice;
        updateSelectedChoice(slice.id);
        state.sliceMeshes.forEach((mesh) => {
            mesh.userData.targetZ = mesh.userData.item.id === slice.id ? 1.25 : 0.45;
        });
        setDetail({
            type: 'Slice',
            index: slice.index,
            name: slice.name,
            description: slice.description,
            status: state.selectedModule.status
        });
        liveRegion.textContent = `${slice.name} selected. Details shown below the explorer.`;
        if (updateHash) setHash(`${state.selectedModule.id}/${slice.id}`);
    };

    const resetExplorer = ({ updateHash = true, focus = false } = {}) => {
        state.selectedModule = null;
        state.selectedSlice = null;
        modeLabels.forEach((label) => { label.textContent = 'Module map'; });
        backButton.hidden = true;
        resetButton.hidden = true;
        clearDetail();
        createModuleMeshes();
        renderNavigation(state.data.modules, 'module');
        liveRegion.textContent = 'Returned to the module map.';
        if (updateHash) setHash('');
        if (focus) navigation.querySelector('button')?.focus();
    };

    const selectFromHash = () => {
        const [moduleId, sliceId] = window.location.hash.slice(1).split('/');
        if (!moduleId) {
            if (state.selectedModule) resetExplorer({ updateHash: false });
            return;
        }
        const module = state.data.modules.find((item) => item.id === moduleId);
        if (!module) {
            resetExplorer({ updateHash: false });
            return;
        }
        selectModule(module, { updateHash: false });
        if (sliceId) {
            const slice = module.slices.find((item) => item.id === sliceId);
            if (slice) selectSlice(slice, { updateHash: false });
        }
    };

    const getPointerIntersection = (event) => {
        const bounds = canvas.getBoundingClientRect();
        state.pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
        state.pointer.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
        state.raycaster.setFromCamera(state.pointer, camera);
        return state.raycaster.intersectObjects(state.interactiveObjects, false)[0]?.object || null;
    };

    canvas.addEventListener('pointermove', (event) => {
        setHoveredById(getPointerIntersection(event)?.userData.item.id || null);
    });
    canvas.addEventListener('pointerleave', () => setHoveredById(null));
    canvas.addEventListener('click', (event) => {
        const object = getPointerIntersection(event);
        if (!object) return;
        object.userData.kind === 'module' ? selectModule(object.userData.item) : selectSlice(object.userData.item);
    });
    canvas.addEventListener('webglcontextlost', (event) => {
        event.preventDefault();
        showFallback('The 3D view paused because its graphics context was lost. The module list remains fully usable.');
    });

    backButton.addEventListener('click', () => resetExplorer({ focus: true }));
    resetButton.addEventListener('click', () => resetExplorer({ focus: true }));
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && state.selectedModule) resetExplorer({ focus: true });
    });
    window.addEventListener('hashchange', () => {
        if (state.data) selectFromHash();
    });

    const resize = () => {
        if (!renderer) return;
        const bounds = canvas.getBoundingClientRect();
        const width = Math.max(1, Math.round(bounds.width));
        const height = Math.max(1, Math.round(bounds.height));
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    };

    const animate = () => {
        state.animationFrame = window.requestAnimationFrame(animate);
        if (!renderer || !state.visible) return;
        const time = performance.now() * 0.00035;
        rings.rotation.z = time * 0.5;

        state.moduleMeshes.forEach((mesh) => {
            const hovered = state.hoveredObject === mesh;
            const targetX = mesh.userData.targetX ?? 0;
            const targetZ = (mesh.userData.targetZ ?? 0) + (hovered ? 0.48 : 0);
            const targetOpacity = mesh.userData.targetOpacity ?? 1;
            const speed = reducedMotion ? 1 : 0.1;
            mesh.position.x = THREE.MathUtils.lerp(mesh.position.x, targetX, speed);
            mesh.position.z = THREE.MathUtils.lerp(mesh.position.z, targetZ, speed);
            mesh.material.opacity = THREE.MathUtils.lerp(mesh.material.opacity, targetOpacity, speed);
        });

        state.sliceMeshes.forEach((mesh, index) => {
            const hovered = state.hoveredObject === mesh;
            const targetScale = mesh.userData.targetScale ?? 1;
            const targetZ = (mesh.userData.targetZ ?? 0.45) + (hovered ? 0.38 : 0);
            const speed = reducedMotion ? 1 : 0.12;
            mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), speed);
            mesh.position.z = THREE.MathUtils.lerp(mesh.position.z, targetZ, speed);
            mesh.rotation.y = Math.sin(time * 2 + index) * 0.04;
        });

        scene.rotation.y = Math.sin(time) * 0.055;
        renderer.render(scene, camera);
    };

    if (!canUseWebGL() || !renderer) {
        showFallback('This browser cannot display the interactive 3D view. Use the complete module list instead.');
    }

    fetch('/content/projects/7-is-watching/module-map.json')
        .then((response) => {
            if (!response.ok) throw new Error(`Module data returned ${response.status}`);
            return response.json();
        })
        .then((data) => {
            state.data = data;
            resetExplorer({ updateHash: false });
            selectFromHash();
            explorer.classList.add('is-ready');
            if (renderer) {
                resize();
                new ResizeObserver(resize).observe(canvas);
                new IntersectionObserver(([entry]) => {
                    state.visible = entry.isIntersecting;
                }, { rootMargin: '120px' }).observe(explorer);
                animate();
            }
        })
        .catch(() => {
            showFallback('The project map is temporarily unavailable. The rest of the project page is still accessible.');
            navigation.innerHTML = '<p class="module-explorer__error">Module information could not be loaded.</p>';
        });
}
