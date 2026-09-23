const prototypeRoot = document.querySelector('[data-unity-prototype]');

if (prototypeRoot) {
    const launchButton = prototypeRoot.querySelector('[data-prototype-launch]');
    const exitButton = prototypeRoot.querySelector('[data-prototype-exit]');
    const fullscreenButton = prototypeRoot.querySelector('[data-prototype-fullscreen]');
    const stage = prototypeRoot.querySelector('[data-prototype-stage]');
    const canvas = prototypeRoot.querySelector('canvas');
    const message = prototypeRoot.querySelector('[data-prototype-message]');
    const progressBar = prototypeRoot.querySelector('[data-prototype-progress]');
    let unityInstance = null;
    let loading = false;

    const setMessage = (text) => {
        message.textContent = text;
        message.hidden = !text;
    };

    const returnToSummary = async () => {
        if (unityInstance) {
            await unityInstance.Quit();
            unityInstance = null;
        }

        stage.hidden = true;
        launchButton.hidden = false;
        launchButton.focus();
        setMessage('Prototype closed.');
    };

    const launchPrototype = async () => {
        if (loading || unityInstance) return;

        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            setMessage('This early build is intended for a desktop browser with a keyboard.');
            return;
        }

        loading = true;
        launchButton.disabled = true;
        stage.hidden = false;
        setMessage('Loading the Unity WebGL files…');

        const buildUrl = prototypeRoot.dataset.buildUrl;
        const productName = prototypeRoot.dataset.productName;

        try {
            await new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = `${buildUrl}/${productName}.loader.js`;
                script.onload = resolve;
                script.onerror = () => reject(new Error('The Unity loader could not be downloaded.'));
                document.body.appendChild(script);
            });

            unityInstance = await createUnityInstance(canvas, {
                dataUrl: `${buildUrl}/${productName}.data`,
                frameworkUrl: `${buildUrl}/${productName}.framework.js`,
                codeUrl: `${buildUrl}/${productName}.wasm`,
                streamingAssetsUrl: 'StreamingAssets',
                companyName: 'DefaultCompany',
                productName,
                productVersion: '1.0',
                showBanner: (text) => setMessage(text),
            }, (progress) => {
                progressBar.style.width = `${Math.round(progress * 100)}%`;
            });

            launchButton.hidden = true;
            setMessage('Prototype loaded. Use the exit control to return focus to this page.');
            canvas.focus();
        } catch (error) {
            stage.hidden = true;
            setMessage(`The prototype could not load. ${error?.message || String(error)}`);
        } finally {
            loading = false;
            launchButton.disabled = false;
        }
    };

    launchButton.addEventListener('click', launchPrototype);
    exitButton.addEventListener('click', returnToSummary);
    fullscreenButton.addEventListener('click', () => unityInstance?.SetFullscreen(1));
}
