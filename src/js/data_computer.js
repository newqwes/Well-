// добавил проверку какая страница открыта на каждой форме будет разное стоять
if (document.querySelector('#formComputer')) {
  // Завожу переменные для удобства доступа к тегу с id('xxx');
const BRAND_SELECTOR = document.querySelector('#brand__computer');
const MODEL_SELECTOR = document.querySelector('#model__computer');
const PROBLEM_SELECTOR = document.querySelector('#problem__computer');
const BUTTON_PRICE_BG = document.querySelector('#btnSubmitSelectModelGajet');
const MODAL_DESCRIPTION = document.querySelector('#modalDescription');
const MODAL_FORM = document.querySelector('#modalForm');
// Создаю базу данных со всеми брендами и моделями телефонов
// в id вписываем следующее по добавлению число 1, 2, 3, ... 20
const COMPUTER_DATA = [
  {id: '1', brand_db: 'Good!', model_db: [
    'Hi', 'MacBook Pro Retina (2012)','MacBook (2015)', 'Другое'
  ]},
  {id: '2', brand_db: 'Lenovo', model_db: [
    'Lenovo IdeaPad 330','Lenovo V-130','Lenovo ThinkPad E580','Lenovo Yoga 530', 'Другое'
  ]},
  {id: '3', brand_db: 'HP', model_db: [
    'HP ZBook Studio x360 G5','HP OMEN 17','HP PAVILION 17','HP ProBook 440 G6', 'Другое' 
  ]},
  {id: '4', brand_db: 'Другое', model_db: [
    'Модель' 
  ]}
];

// Создаю массив с данными со всеми видами поломок для телефонов
const PROBLEM_COMPUTER_DATA = [
  'Был залит','Треснуло стекло','Не работает микрофон', 'Другая причина'
];

/* 
В BRAND_SELECTOR вписываем новые значения для отображения на странице при помощи innerHTML
перебираем всё что есть в базе PHONE_DATA при помощи map и этим же методом сразу всё вписываем.
n тут и есть PHONE_DATA это одно и тоже.
value=id нужно для того что бы потом по этому значения id смотреть какие есть у нее модели телефонов в следующем нашем методе.
*/
BRAND_SELECTOR.innerHTML = COMPUTER_DATA
  .map(n => `<option value="${n.id}">${n.brand_db}</option>`);

/* 
В PROBLEM_SELECTOR вписываем новые значения для отображения на странице при помощи innerHTML
перебираем всё что есть в базе PROBLEM_PHONE_DATA при помощи map и этим же методом сразу всё вписываем
n тут и есть PROBLEM_PHONE_DATA это одно и тоже
*/
PROBLEM_SELECTOR.innerHTML = PROBLEM_COMPUTER_DATA
.map(n => `<option>${n}</option>`);

// Вешаем оброботчик событий на то когда выбирут или изменится значение BRAND_SELECTOR
BRAND_SELECTOR.addEventListener('change', function() {
MODEL_SELECTOR.innerHTML = COMPUTER_DATA
  .find(n => n.id === this.value)
  .model_db
  .map(n => `<option value="${n.id}">${n}</option>`);
});

// BRAND_SELECTOR сразу говорит, что оно изменино что бы сразу же сработала вот это BRAND_SELECTOR.addEventListener('change'
// говорит change значит должен сработать верхний метод и при открытии страницы сразу
//  видно выбор какой то, без него нужно что то сначало изменить
BRAND_SELECTOR.dispatchEvent(new Event('change'));


// заводим переменную для удобства. П.С. использовать лучше qverySelector
BUTTON_PRICE_BG.addEventListener('click', () => { 

  // // действие при нажатии на кнопку в шапке сайта, удаляем и добавляем другой класс
  // HIDDEN_DESCRIPTION.classList.remove('price-bg__description-hidden');
  // HIDDEN_DESCRIPTION.classList.add('price-bg__description-active');
  // Ищем что выбрал пользователь в списке получилось через jq по другому что то не получилось на чистом
  //   js $('#model__id option:selected').html() можно и ...val()
  MODAL_DESCRIPTION.innerHTML = 
    `${$('#brand__computer option:selected').html()} ${$('#model__computer option:selected').html()}. ${PROBLEM_SELECTOR.value}. Узнать стоимость?`;
  // Делаю как модалку
  MODAL_FORM.classList.remove('modal__hidden');
  MODAL_FORM.classList.add('modal__active');
});
};