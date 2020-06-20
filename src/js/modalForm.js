const BUTTON = document.querySelector('#headerButton');
const MODAL_FORM_CLASS_LIST = document.querySelector('#modalForm').classList;
const MODAL_TEXTAREA_CLASS_LIST = document.querySelector('#modalTextarea').classList;
// заводим переменную для удобства. П.С. использовать лучше qverySelector

BUTTON.addEventListener('click', () => { 
    // действие при нажатии на кнопку в шапке сайта, удаляем и добавляем другой класс для модалки, она внизу html
    MODAL_FORM_CLASS_LIST.remove('modal__hidden');
    MODAL_FORM_CLASS_LIST.add('modal__active');
    MODAL_TEXTAREA_CLASS_LIST.remove('modal__textarea_hidden');
    MODAL_TEXTAREA_CLASS_LIST.add('modal__textarea_active');
    
    document.querySelector('#modalDescription').innerHTML = 
    `Оставьте свои данные и наши специалисты с Вами свяжутся!`;
});
// Сделал обработчиком событий через jq так как через addEventListener получалось сделать только один видит а как несколько сделать не знаю
$('.table-price__button').on('click', () => {
    MODAL_FORM_CLASS_LIST.remove('modal__hidden');
    MODAL_FORM_CLASS_LIST.add('modal__active');
    MODAL_TEXTAREA_CLASS_LIST.remove('modal__textarea_hidden');
    MODAL_TEXTAREA_CLASS_LIST.add('modal__textarea_active');
    document.querySelector('#modalDescription').innerHTML = 
    `Оставьте свои данные и наши специалисты с Вами свяжутся!`;
});

$(document).mousedown(function (e) { 
    /* https://youtu.be/rIb0OoNWDEs?t=479 взял тут идею через jqvery всё равно подключил эту 
    библиотеку, вообщем смысл в том что бы проверять на нажатие мыши и если не этот элемент 
    главный в модалке и все его внутренности то закрываем модалку
    */
    let clickToOverlate = $('#modalBattonClose')
    if (e.target != clickToOverlate[0]&&clickToOverlate.has(e.target).length === 0) {
        MODAL_FORM_CLASS_LIST.remove('modal__active');
        MODAL_FORM_CLASS_LIST.add('modal__hidden');
        MODAL_TEXTAREA_CLASS_LIST.remove('modal__textarea_active');
        MODAL_TEXTAREA_CLASS_LIST.add('modal__textarea_hidden');
    }
});
