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

function adjustHeights() {
    const photo = document.querySelector('.other-photo img');
    const painting = document.querySelector('.other-painting img');
    const text = document.querySelector('.other-text');
    const maxHeight = Math.max(photo.clientHeight, painting.clientHeight, text.clientHeight);

    photo.style.height = `${maxHeight}px`;
    painting.style.height = `${maxHeight}px`;
    text.style.height = `${maxHeight}px`;
}

window.addEventListener('load', adjustHeights);
window.addEventListener('resize', adjustHeights);
