const navigation = document.querySelector('.navigation');
let isDown = false;
let startX;
let scrollLeft;
let isDragging = false; // Track if the user is dragging

const links = navigation.querySelectorAll('a');

navigation.addEventListener('mousedown', (e) => {
    isDown = true;
    isDragging = false; // Reset dragging flag
    navigation.classList.add('active');
    startX = e.pageX - navigation.offsetLeft;
    scrollLeft = navigation.scrollLeft;
});

navigation.addEventListener('mouseleave', () => {
    if (isDown) {
        isDown = false;
        navigation.classList.remove('active');
    }

    // Re-enable pointer events on links
    links.forEach(link => {
        link.style.pointerEvents = 'auto';
    });
});

navigation.addEventListener('mouseup', () => {
    if (isDown) {
        isDown = false;
        navigation.classList.remove('active');
    }

    // Re-enable pointer events on links
    links.forEach(link => {
        link.style.pointerEvents = 'auto';
    });

    if (isDragging) {
        // Prevent link clicks after dragging
        isDragging = false;
    }
});

navigation.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Stop the function if mouse is not down
    e.preventDefault();
    const x = e.pageX - navigation.offsetLeft;
    const walk = (x - startX) * 3; // Increase scroll speed
    navigation.scrollLeft = scrollLeft - walk;

    if (Math.abs(walk) > 5) { // Consider a drag if the user has moved more than 5px
        isDragging = true;
        links.forEach(link => {
            link.style.pointerEvents = 'none'; // Disable pointer events during dragging
        });
    }
});

// Prevent default link behavior during dragging
links.forEach(link => {
    link.addEventListener('click', (e) => {
        if (isDragging) {
            e.preventDefault(); // Prevent click if dragging occurred
        }
    });

    // Prevent the links from being draggable
    link.setAttribute('draggable', 'false');
});
