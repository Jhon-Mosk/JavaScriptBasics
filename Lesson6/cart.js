// Реализовать модуль корзины. Создать блок товаров и блок корзины. 
// У каждого товара есть кнопка «Купить», при нажатии на которую происходит 
// добавление имени и цены товара в блок корзины. Корзина должна уметь считать
//  общую сумму заказа.

function buy(event) {
    /* берем родительский элемент у нажатой кнопки и клонируем его */
    const product = event.srcElement.parentNode.cloneNode(true);
    /* удаляем последний элемент - кнопку */
    product.lastElementChild.remove();
    
    product.className += " buyProduct";
    /* берем корзину */
    const cart = document.getElementsByClassName("cart")[0];    
    /* записываем в корзину клонированый продукт */  
    cart.append(product);
    /* считаем сумму */ 
    sumProductPrice();
}

function sumProductPrice() { /* считаем сумму */
    /* берём цену всех купленных элементов */
    const buyProducts = document.getElementsByClassName("buyProduct");
    /* общая сумма товара */
    let sum = 0; 
    /* пробегаем по всем ценам и складываем */
    for(let item of buyProducts) {
        /* приводим к числу содержимое последнего элемента - цену */        
        sum += Number(item.lastElementChild.textContent);
    }
    /* берём элемент с классом  .cart__total */
    let total = document.getElementById("cart__total");
    /* отображаем его */
    total.style.display = "block";
    /* записываем итоговую сумму */
    total.innerHTML = `Итого: ${sum}`;    
}

function init() { /* инизиализация */
    /* создаём коллекцию из всех кнопок находящихся в .product__item */
    const buttons = document.querySelectorAll(".product__item > button");
    /* вешаем на каждую кнопку обработчик событий */
    for(let button of buttons) {
        button.addEventListener('click', buy);
    }
}
/* инизиализация */
window.addEventListener('load', init);