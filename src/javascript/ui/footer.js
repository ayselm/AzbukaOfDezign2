function adjustFooterPosition() {
    const footer = document.querySelector('.footer');
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (documentHeight <= viewportHeight) {
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
        footer.style.left = '0';
        footer.style.right = '0';
    } else {
        footer.style.position = 'static';
    }
}

window.addEventListener('load', adjustFooterPosition);
window.addEventListener('resize', adjustFooterPosition);