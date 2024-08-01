function toggleText(id) {
    const element = document.getElementById(id);
    const iconContainer = element.parentElement;
    if (iconContainer.classList.contains('open')) {
        iconContainer.classList.remove('open');
    } else {
        iconContainer.classList.add('open');
    }
}
