let preloader = document.querySelector('.preloader');
window.addEventListener('load', () => {
    preloader.classList.add('preloader__hiden');
    setTimeout(() => {
        preloader.remove();
    }, 600);
});
