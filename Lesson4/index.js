
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
    game.init();
    let btm = document.createElement('button');
    btm.className = "button__game";
    btm.id = "game";
    btm.innerHTML = "Играть";
    board.append(btm);
    document.getElementById('game').onclick = game.run;
}

function task3() {    
    millionaire.start();
}

document.getElementById("task1").onclick = task1;
document.getElementById("task2").onclick = task2;
document.getElementById("task3").onclick = task3;
