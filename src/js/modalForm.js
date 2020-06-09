const BUTTON = document.querySelector('#headerButton')
// заводим переменную для удобства. П.С. использовать лучше qverySelector

BUTTON.addEventListener('click', () => { 
    // действие при нажатии на кнопку в шапке сайта, удаляем и добавляем другой класс для модалки, она внизу html
    document.querySelector('#modalForm').classList.remove('modal__hidden')
    document.querySelector('#modalForm').classList.add('modal__active')
    
})

$(document).mousedown(function (e) { 
    /* https://youtu.be/rIb0OoNWDEs?t=479 взял тут идею через jqvery всё равно подключил эту 
    библиотеку, вообщем смысл в том что бы проверять на нажатие мыши и если не этот элемент 
    главный в модалке и все его внутренности то закрываем модалку
    */
    let clickToOverlate = $('#modalBattonClose')
    if (e.target != clickToOverlate[0]&&clickToOverlate.has(e.target).length === 0) {
        document.querySelector('#modalForm').classList.remove('modal__active')
        document.querySelector('#modalForm').classList.add('modal__hidden')
    }
})
