function onLoadInline(){
    console.log("1. Вызвано событие загрузки страницы через HTML.");
}

function onLoadObject(){
    console.log("1. Вызвано событие загрузки страницы через объект window.");
}

function onLoadObject2(){
    console.log("2. Добавили событие через объект window.");
}

window.onload = onLoadObject;

window.onload = onLoadObject2;

function onLoadEventListener(){
    console.log("1. Вызвано событие загрузки страницы через функцию addEventListener.");
}

function onLoadEventListener2(){
    console.log("2. Добавили событие через функцию addEventListener.");
}

window.addEventListener('load', onLoadEventListener);

window.addEventListener('load', onLoadEventListener2);
