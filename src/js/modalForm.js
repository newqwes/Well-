const BUTTON = document.getElementById('headerButton');
const CLOSE_BUTTON = document.getElementById('modalBatton');

BUTTON.addEventListener('click', () => {
    document.getElementById('modalForm').classList.remove('modal__hidden');
    document.getElementById('modalForm').classList.add('modal__active');
    
});

// CLOSE_BUTTON.addEventListener('click', () => {
//     document.getElementById('modalForm').classList.remove('modal__active');
//     document.getElementById('modalForm').classList.add('modal__hidden');
// });

$(document).click(function (e) {
    if (e.target === modal.modal__active) {
        console.log('ewr');
    }
});

document.onclick = function(e){
    if ( event.target.className != 'modal__active' && event.target.className != 'header__button') {
        document.getElementById('modalForm').classList.add('modal__hidden');
        document.getElementById('modalForm').classList.remove('modal__active');
    };
};