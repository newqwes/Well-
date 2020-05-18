import "jquery";
import "popper.js";
import swal from 'sweetalert';
import "./js/jquery.maskedinput.min";


//preloader
let preloader = document.querySelector('.preloader');
window.addEventListener('load', () => {
    preloader.classList.add('preloader__hiden');
    setTimeout(() => {
        preloader.remove();
    }, 600);
});

//Scroll to id in main menu
$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

// Проверяем с какого устройства передана форма
let detect = new MobileDetect(window.navigator.userAgent);
if (detect.mobile() !== null) {
    $('[name*="device"]').val("Телефон или планшет: " + detect.mobile() + " Операционная система: " + detect.os() + " UserAgent: " + detect.userAgent());
}
else $('[name*="device"]').val("Компьютер");
//  console.log("Mobile: " + detect.mobile());       // телефон или планшет 
//  console.log("Phone: " + detect.phone());         // телефон 
//  console.log("Tablet: " + detect.tablet());       // планшет 
//  console.log("OS: " + detect.os());               // операционная система 
//  console.log("userAgent: " + detect.userAgent()); // userAgent


// Галочка после отправки формы
jQuery(document).ready(function(){
    $('[name*="phone"]').mask("+375 (99) 99-99-999"); //маска номера телефона
	jQuery("form").submit(function() { // Событие отправки с формы
		var form_data = jQuery(this).serialize(); // Собираем данные из полей
		jQuery.ajax({
			type: "POST", // Метод отправки
			url: "sendform.php", // Путь к PHP обработчику sendform.php
			data: form_data,
			success: swal({
                title: "Спасибо!",
                text: "REFIT благодарит за оставленную заявку!",
                icon: "success",
                button: false
                //timer: 2000
              })
        });
        $(this).find('input, textarea').prop('disabled', true); // блокируем повторный ввод данных
        event.preventDefault();
    });
});

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
    for (let i = 0; i < gadjetModelSelectOptionsData[c].length; i++) {
        o = new Option(gadjetModelSelectOptionsData[c][i],i,false,false);
        model.add(o);
        console.log(model.add(o));
    };
};
