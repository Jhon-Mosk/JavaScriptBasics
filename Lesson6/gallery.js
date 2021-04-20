function createImg(seed) {   
    /* создаем картинку */
	const image = document.createElement("img");
    /* добавляем атрибуты к картинке */
    image.id  = `image-${seed}`;
    image.src = `https://picsum.photos/seed/${seed}/800`;    
    image.alt = `Изображение ${seed}`;
    image.setAttribute("data-seed", `${seed}`);
    return image;
}

function checkImg(image, gallery) { /* проверяем загрузилась картинка или нет */
    image.onload = function() {
        /* добавляем новый блок в галерею */
        gallery.append(image);
    }

    image.onerror = function() {
        /* добавляем изображение ошибки */
        image.src = "errorImg.jpg";
        // gallery.append(image); без этого вроде быстрее работает
    }
}

function openImage(event) { 
    /* получаем div элемент галерии */
    const gallery = document.getElementsByClassName("gallery")[0];    
    /* получаем пораждающий событие объект */
	const target = event.target;
    /* получаем data-атрибут с номером картинки */
	const seed = target.dataset.seed;
    /* если номер пустой, то прерываем выполнение */
	if (!seed) {
        return;
    }
    /* очищаем галерею */
    gallery.innerHTML = "";
    /* создаем картинку */
    const image = createImg(seed);
    /* проверяем загрузилась картинка или нет */
    checkImg(image, gallery);    
}

function toLeft(event) {
    /* получаем div элемент галерии */
    const gallery = document.getElementsByClassName("gallery")[0];    
    /* получаем data-атрибут с номером картинки */
	const seed = gallery.children[0].getAttribute("data-seed") - 1;
    /* если номер пустой или если картинок не осталось, то прерываем выполнение */
	if (!seed || seed <= 0) {
        return;
    }
    /* очищаем галерею */
    gallery.innerHTML = ""; 
    /* создаем картинку */
    const image = createImg(seed);    
    /* проверяем загрузилась картинка или нет */
    checkImg(image, gallery);  
}

function toRight(event, images) {
    /* получаем div элемент галерии */
    const gallery = document.getElementsByClassName("gallery")[0];    
    /* получаем data-атрибут с номером картинки */
	const seed = parseInt(gallery.children[0].getAttribute("data-seed")) + 1;    
    /* если номер пустой или если картинок не осталось, то прерываем выполнение */
	if (!seed || seed > this.images.length) {
        return;
    }      
    /* очищаем галерею */
    gallery.innerHTML = "";   
    /* создаем картинку */
    const image = createImg(seed);
    /* проверяем загрузилась картинка или нет */
    checkImg(image, gallery);  
}

function init() {
    const images = document.querySelectorAll(".thumbnails > img");
    const leftArrow = document.getElementById("leftControl");
    const rightArrow = document.getElementById("rightControl");
    leftArrow.addEventListener('click', toLeft);
    rightArrow.addEventListener('click', {handleEvent: toRight, images: images});

    for (let image of images) {
        image.addEventListener('click', openImage);
    }
}

window.addEventListener('load', init);
