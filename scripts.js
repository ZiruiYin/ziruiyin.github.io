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
    document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
}
