const BUTTON__TABLE_PRICE = document.querySelector('#table-price__button_id')
// заводим переменную для удобства. П.С. использовать лучше qverySelector
const HIDDEN_LIST = document.querySelector('.table-price__hidden_all-time')

BUTTON__TABLE_PRICE.addEventListener('click', () => {
    if (document.querySelector('#table-price__button_id').classList.contains("table-price__button_active")) {
        HIDDEN_LIST.classList.add('table-price__hidden')
        BUTTON__TABLE_PRICE.classList.remove('table-price__button_active')
    }
    else {
        HIDDEN_LIST.classList.remove('table-price__hidden')
        BUTTON__TABLE_PRICE.classList.add('table-price__button_active')
    }
})

