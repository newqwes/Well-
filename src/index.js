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

