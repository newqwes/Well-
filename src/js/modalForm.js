const BUTTON = document.getElementById('headerButton'); 
// заводим переменную для удобства. П.С. использовать лучше qverySelector

BUTTON.addEventListener('click', () => { 
    // действие при нажатии на кнопку в шапке сайта, удаляем и добавляем другой класс для модалки, она внизу html
    document.getElementById('modalForm').classList.remove('modal__hidden');
    document.getElementById('modalForm').classList.add('modal__active');
    
});

$(document).mouseup(function (e) { 
    /* https://youtu.be/rIb0OoNWDEs?t=479 взял тут идею через jqvery всё равно подключил эту 
    библиотеку, вообщем смысл в том что бы проверять на нажатие мыши и если не этот элемент 
    главный в модалке и все его внутренности то закрываем модалку
    */
    let clickToOverlate = $('#modalBattonClose');
    if (e.target != clickToOverlate[0]&&clickToOverlate.has(e.target).length === 0) {
        document.getElementById('modalForm').classList.remove('modal__active');
        document.getElementById('modalForm').classList.add('modal__hidden');
    }
});