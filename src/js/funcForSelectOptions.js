/* 
В BRAND_SELECTOR вписываем новые значения для отображения на странице при помощи innerHTML
перебираем всё что есть в базе PHONE_DATA при помощи map и этим же методом сразу всё вписываем.
n тут и есть PHONE_DATA это одно и тоже.
value=id нужно для того что бы потом по этому значения id смотреть какие есть у нее модели телефонов в следующем нашем методе.
*/
export const mapFirstOptionSelect = (BRAND_SELECTOR, DEVICE_DATA) => {
    BRAND_SELECTOR.innerHTML = DEVICE_DATA
    .map(n => `<option value="${n.id}">${n.brand_db}</option>`);
};

/* 
В PROBLEM_SELECTOR вписываем новые значения для отображения на странице при помощи innerHTML
перебираем всё что есть в базе PROBLEM_PHONE_DATA при помощи map и этим же методом сразу всё вписываем
n тут и есть PROBLEM_PHONE_DATA это одно и тоже
*/
export const mapProblemOptionSelect = (PROBLEM_SELECTOR, PROBLEM_DEVICE_DATA) => {
    PROBLEM_SELECTOR.innerHTML = PROBLEM_DEVICE_DATA
.map(n => `<option>${n}</option>`);
};

// Вешаем оброботчик событий на то когда выбирут или изменится значение BRAND_SELECTOR
export const isChangeFirstOptionSelect = (BRAND_SELECTOR, MODEL_SELECTOR, DIVECE_DATA) => {
    BRAND_SELECTOR.addEventListener('change', function() {
        MODEL_SELECTOR.innerHTML = DIVECE_DATA
          .find(n => n.id === this.value)
          .model_db
          .map(n => `<option value="${n.id}">${n}</option>`);
        });
};

// BRAND_SELECTOR сразу говорит, что оно изменино что бы сразу же сработала вот это BRAND_SELECTOR.addEventListener('change'
// говорит change значит должен сработать верхний метод и при открытии страницы сразу
//  видно выбор какой то, без него нужно что то сначало изменить
export const dispatchFirstOptionSelect = (BRAND_SELECTOR) => {
    BRAND_SELECTOR.dispatchEvent(new Event('change'));
};
