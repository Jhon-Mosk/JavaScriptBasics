function task1() {
    let n = +prompt('Введите положительное число, и я выведу все простые числа, идущие до него, на экран');

    let i = 2;
    while (i <= n) {
        let j = 2;
        while (j < i) {
            if (i % j == 0) {
                break;
            }
            j++;
        }
        if (j == i) {
            board.innerHTML += i + " ";
        }
        i++;
    }
}

function task2() {
    let shirt = {color:'red', size:'M', price:1500};
    let jeans = {color:'blue', size:56, price:2500};
    let cap = {color:'black', size:40, price:500};
    let sneakers = {color:'yellow', size:41, price:5000};
    var cart = [shirt, jeans, cap, sneakers];

    board.innerHTML = calculateCost(cart);

    function calculateCost(cart) {
        let cost = 0;
        for (let i in cart) {            
            cost += cart[i].price;            
        }
        return cost;
    }
}

function task3() {    
    for(let i = 0; i <= 9; board.innerHTML += i++ + ' ') {

    }
}

function task4() {  
    let size = +prompt("Введите высоту пирамиды");
    let arr = [];
    let space  = 0;
    for(let i = size; i > 0; i--) {        
        arr[i] = [];
        for (var j = 0; j < i; j++) {                        
            arr[i][j+space]= 'x';            
        }
        arr[i][j+space] = "<br \/>";
        space++;
    }
    board.innerHTML = arr;    
}

document.getElementById("task1").onclick = task1;
document.getElementById("task2").onclick = task2;
document.getElementById("task3").onclick = task3;
document.getElementById("task4").onclick = task4;
