//price-bg выбор марки и модели гаджета, зависимые списки
const gadjetModelSelectOptionsData = {
    //место для добавления данных,свойство должно совпадать со значением value в html
    Standart: ["Модель"],
    Apple: ["iPhone XS Max", "iPhone 6", " iPhone 5s", "iMac", "MacBook Air 2013"],
    Asus: ["Zenbook J21", "Jetfit X", "TandraGaming", "Super Vision 9"]
    /* 
    Добавить список сюда!!! 
    <option value="Lenovo">Lenovo</option>
    <option value="Sony">Sony</option>
    <option value="HP">HP</option>
    */
};
let brand = document.querySelector("#brand__id");
let model = document.querySelector("#model__id");

window.onload = selectOptions;
brand.onchange = selectOptions;
function selectOptions(event) {
    model.innerHTML = "";
    let c = this.value || "Standart", o;// стандартный выбор
    // c - Название фирмы например Apple
    // o - 
    for (let i = 0; i < gadjetModelSelectOptionsData[c].length; i++) {
        o = new Option(gadjetModelSelectOptionsData[c][i],i,false,false)
        model.add(o)
    };
};

