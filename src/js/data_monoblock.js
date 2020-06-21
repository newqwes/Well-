import {
  mapFirstOptionSelect, 
  mapProblemOptionSelect,
  isChangeFirstOptionSelect,
  dispatchFirstOptionSelect
} from '../js/funcForSelectOptions';
// добавил проверку какая страница открыта на каждой форме будет разное стоять
if (document.querySelector('#formMonoblock')) {
  // Завожу переменные для удобства доступа к тегу с id('xxx');
const BRAND_SELECTOR = document.querySelector('#brand__monoblock');
const MODEL_SELECTOR = document.querySelector('#model__monoblock');
const PROBLEM_SELECTOR = document.querySelector('#problem__monoblock');
const BUTTON_PRICE_BG = document.querySelector('#btnSubmitSelectModelGajet');
const MODAL_DESCRIPTION = document.querySelector('#modalDescription');
const MODAL_FORM = document.querySelector('#modalForm');
// Создаю базу данных со всеми брендами и моделями телефонов
// в id вписываем следующее по добавлению число 1, 2, 3, ... 20
const MONOBLOCK_DATA = [
  {id: '1', brand_db: 'Apple', model_db: [
    'iMac 2019', 'MacBook Pro Retina (2012)','MacBook (2015)', 'Другое'
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
const PROBLEM_MONOBLOCK_DATA = [
  'Был залит','Треснуло стекло','Не работает микрофон', 'Другая причина'
];
mapFirstOptionSelect(BRAND_SELECTOR, MONOBLOCK_DATA);
mapProblemOptionSelect(PROBLEM_SELECTOR, PROBLEM_MONOBLOCK_DATA);
isChangeFirstOptionSelect(BRAND_SELECTOR, MODEL_SELECTOR, MONOBLOCK_DATA);
dispatchFirstOptionSelect(BRAND_SELECTOR);
BUTTON_PRICE_BG.addEventListener('click', () => { 
  // // действие при нажатии на кнопку в шапке сайта, удаляем и добавляем другой класс
  // HIDDEN_DESCRIPTION.classList.remove('price-bg__description-hidden');
  // HIDDEN_DESCRIPTION.classList.add('price-bg__description-active');
  // Ищем что выбрал пользователь в списке получилось через jq по другому что то не получилось на чистом
  //   js $('#model__id option:selected').html() можно и ...val()
  MODAL_DESCRIPTION.innerHTML = 
    `${$('#brand__monoblock option:selected').html()} ${$('#model__monoblock option:selected').html()}. ${PROBLEM_SELECTOR.value}. Узнать стоимость?`;
  // Делаю как модалку
  MODAL_FORM.classList.remove('modal__hidden');
  MODAL_FORM.classList.add('modal__active');
});
};