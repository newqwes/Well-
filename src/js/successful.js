import swal from 'sweetalert';
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
                button: false,
                timer: 1500
              })
        });
        $(this).find('input, textarea').prop('disabled', true); // блокируем повторный ввод данных
        event.preventDefault();
        document.getElementById('modalForm').classList.remove('modal__active');
    });
});
