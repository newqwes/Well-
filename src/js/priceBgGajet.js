const BUTTON_PRICE_BG = document.querySelector('#btnSubmitSelectModelGajet');
// const HIDDEN_DESCRIPTION = document.querySelector('#price-bg__hidden-price');
const SELECT_BRAND = document.querySelector('#brand__id');
const SELECT_MODEL = document.querySelector('#model__id');
const MODAL_DESCRIPTION = document.querySelector('#modalDescription');
// заводим переменную для удобства. П.С. использовать лучше qverySelector

BUTTON_PRICE_BG.addEventListener('click', () => { 
    // // действие при нажатии на кнопку в шапке сайта, удаляем и добавляем другой класс
    // HIDDEN_DESCRIPTION.classList.remove('price-bg__description-hidden');
    // HIDDEN_DESCRIPTION.classList.add('price-bg__description-active');
    // Ищем что выбрал пользователь в списке получилось через jq по другому что то не получилось на чистом
    //   js $('#model__id option:selected').html() можно и ...val()

    if (SELECT_BRAND.value !== 'Standart') {
        MODAL_DESCRIPTION.innerHTML = `${SELECT_BRAND.value} ${$('#model__id option:selected').html()} от 70р`;

        // Делаю как модалку
        document.querySelector('#modalForm').classList.remove('modal__hidden')
        document.querySelector('#modalForm').classList.add('modal__active')
    }
   
});
