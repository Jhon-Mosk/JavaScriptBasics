
// 3. *На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»

function task1() {    
    let userNumber;

    do {
        userNumber= +prompt('Введите число от 0 до 999');
        if (userNumber > 999) {
            console.log(`${userNumber} больше 999`);
            let empty = {};       
            return empty;
        }
    } while (userNumber > 999 ||  isNaN(userNumber) || userNumber < 0);
    
    writeObject(transformNumberToObject(userNumber));

    function transformNumberToObject (userNumber) {
        let splitUserNumber = userNumber.toString().split('').reverse();
        return createSplitObject(splitUserNumber);
    }
    
    function createSplitObject (splitUserNumber) {
        let nameOfParam = ['единицы', 'десятки', 'сотни'];
        let splitObject = {};
        
        for(let key in splitUserNumber) {            
            splitObject[nameOfParam[key]] = splitUserNumber[key];                                  
        }     

        return splitObject;
    }

    function writeObject (obj) {        
        for (let prop in obj) {
            console.log(prop + ": " + obj[prop]);
        }
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
