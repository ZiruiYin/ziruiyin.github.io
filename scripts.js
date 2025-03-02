function toggleText(id) {
    const element = document.getElementById(id);
    const iconContainer = element.parentElement;
    if (iconContainer.classList.contains('open')) {
        iconContainer.classList.remove('open');
        element.style.height = '0';
        element.style.opacity = '0';
    } else {
        iconContainer.classList.add('open');
        element.style.height = element.scrollHeight + 'px';
        element.style.opacity = '1';
    }
}

function scrollToContent() {
    const mainContent = document.getElementById('main-content');
    const coverPageHeight = document.querySelector('.cover-page').offsetHeight;
    const scrollDistance = coverPageHeight - 100; // Leave a bit of the cover page visible

    window.scrollTo({
        top: scrollDistance,
        behavior: 'smooth'
    });

    window.addEventListener('scroll', preventScrollUp);

    function preventScrollUp() {
        if (window.scrollY < scrollDistance) {
            window.scrollTo({
                top: scrollDistance,
                behavior: 'smooth'
            });
        }
    }
}

window.addEventListener('load', () => {
    setTimeout(() => {
        const mainContent = document.getElementById('main-content');
        const coverPageHeight = document.querySelector('.cover-page').offsetHeight;
        const scrollDistance = coverPageHeight - 100; // Leave a bit of the cover page visible

        let start = null;
        const duration = 2000; // Duration of the scroll animation

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            const easedProgress = easeInOutQuad(progress / duration);
            window.scrollTo(0, easedProgress * scrollDistance);

            if (progress < duration) {
                window.requestAnimationFrame(step);
            } else {
                window.scrollTo(0, scrollDistance);
                window.addEventListener('scroll', preventScrollUp);
            }
        }

        window.requestAnimationFrame(step);
    }, 2000); // Automatically scroll down after 2 seconds
});
