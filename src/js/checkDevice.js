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