<?php
//Сбор данных из полей формы.
$device = $_POST['device'];
$name = $_POST['name'];// Берём данные из input c атрибутом name="name"
$phone = str_replace("+", "", $_POST['phone']); // Берём данные из input c атрибутом name="phone"
$text = $_POST['text']; // Берём данные из input c атрибутом name="mail"

$token = "1274746361:AAFaEfCtiMMEPu_IThlaFWyP37QUKEcs96o"; // Тут пишем токен
$chat_id = "-404256336"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = "5020.by"; //Указываем название сайта
$newtel = 
$arr = array(
  'Дата: ' => date('d-m-Y H:i:s'),
  'Заказ с сайта: ' => $sitename,
  'Имя: ' => $name,
  'Телефон: %2B' => $phone,
  'Комментарий: ' => $text,
  'Устройство: ' => $device
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>