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
    setTimeout(scrollToContent, 2000); // Automatically scroll down after 2 seconds
});
