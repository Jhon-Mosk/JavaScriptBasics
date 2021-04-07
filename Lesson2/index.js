function task1() {   
    let a = 1,
        b = 1,
        c, d;
    c = ++a;
    alert('c = ++a = ' + c + ' : так как сначала происходит инкреминтация, а потом отображение'); // 2 : так как сначала происходит инкреминтация, а потом отображение
    d = b++;
    alert('d = b++ = ' + d + ' : так как сначала происходит отображение, а потом инкреминтация'); // 1 : так как сначала происходит отображение, а потом инкреминтация
    c = (2 + ++a);
    alert('c = (2 + ++a) = ' + c + ' : так как а = 2 и происходит инкреминтация, а потом сложение'); // 5 : так как а = 2 и происходит инкреминтация, а потом сложение
    d = (2 + b++);
    alert('d = (2 + b++) = ' + d + ' : так как b = 2 и происходит инкреминтация, а потом сложение'); // 4 : так как b = 1 и происходит инкреминтация, а потом сложение
    alert('a = ' + a + ' : так как инкреминтация произашла два раза'); // 3 : так как инкреминтация произашла два раза
    alert('b = ' + b + ' : так как инкреминтация произашла два раза'); // 3 : так как инкреминтация произашла два раза
}

function task2() {
    alert('x в примере:\nvar a = 2\nvar x = 1 + (a *= 2)\nбудет равно: 5')

    let a = 2;
    let x = 1 + (a *= 2);
    alert(x);
}

function task3() {
    let a, b;

    do {
        a = Number(prompt('Введите первое целое число'));
        b = Number(prompt('Введите второе целое число'));
    } while (isNaN(a) || isNaN(b));

    if (a > 0 && b > 0) {
        alert(a - b + ' = a - b');
    } else if (a < 0 && b < 0) {
        alert(a * b + ' = a * b');
    } else {
        alert(a + b + ' = a + b');
    }
}

function task4() {
    const MIN_RANDOM_NUMBER = 0;
    const MAX_RANDOM_NUMBER = 15;
    let a = parseInt(Math.random() * (MAX_RANDOM_NUMBER - MIN_RANDOM_NUMBER) + MIN_RANDOM_NUMBER);
    
    switch (a) {
        case 0:
            alert('case 0: a = ' + a);   
        case 1:
            alert('case 1: a = ' + a);   
        case 2:
            alert('case 2: a = ' + a);   
        case 3:
            alert('case 3: a = ' + a);   
        case 4:
            alert('case 4: a = ' + a);   
        case 5:
            alert('case 5: a = ' + a);   
        case 6:
            alert('case 6: a = ' + a);   
        case 7:
            alert('case 7: a = ' + a);   
        case 8:
            alert('case 8: a = ' + a);   
        case 9:
            alert('case 9: a = ' + a);   
        case 10:
            alert('case 10: a = ' + a);   
        case 11:
            alert('case 11: a = ' + a);   
        case 12:
            alert('case 12: a = ' + a);   
        case 13:
            alert('case 13: a = ' + a);   
        case 14:
            alert('case 14: a = ' + a);   
        case 15:
            alert('case 15: a = ' + a);
            break;   
    }
}

function task5() {
    alert('Функции объявлены');
    function sum(arg1, arg2) {
        return arg1 + arg2;
    }

    function subtract(arg1, arg2) {
        return arg1 - arg2;
    }
    function multiply(arg1, arg2) {
        return arg1 * arg2;
    }
    function split(arg1, arg2) {
        return arg1 / arg2;
    }
}

function task6() {
    let arg1, arg2, operation;  

    do {
        arg1 = +prompt('Введите первое число');
        arg2 = +prompt('Введите второе число');
        operation = prompt('Введите название операции:\nsum - сложение\nsubtract - вычетание\nmultiply - умножение\nsplit - деление');
    } while (isNaN(arg1) || isNaN(arg2) && (operation !== 'sum' || operation !== 'subtract' || operation !== 'multiply' || operation !== 'split'));

    mathOperation(arg1, arg2, operation);

    function sum(arg1, arg2) {
        return arg1 + arg2;
    }

    function subtract(arg1, arg2) {
        return arg1 - arg2;
    }
    function multiply(arg1, arg2) {
        return arg1 * arg2;
    }
    function split(arg1, arg2) {
        return arg1 / arg2;
    }

    function mathOperation(arg1, arg2, operation) {        
        switch (operation) {
            case 'sum':                               
                alert(sum(arg1, arg2));
                break;
            case 'subtract':
                alert(subtract(arg1, arg2));
                break;
            case 'multiply':
                alert(multiply(arg1, arg2));
                break;
            case 'split':
                alert(split(arg1, arg2));
                break;
        }
    }
}

function task7() {
    alert(null == 0);
    alert(null === 0);
    alert('false, так как null это ничего, пустота. А 0 это число');
}

function task8() {
    let value, exponentiation;
    value = +prompt('Введите число');
    exponentiation = +prompt('Введите степень');
    alert('Результат = ' + power(value, exponentiation));
    function power(value, exponentiation) {
        if (exponentiation === 1) {
            return value;
        } else {
            return value * power(value, exponentiation - 1);
        }
    }
}

document.getElementById("task1").onclick = task1;
document.getElementById("task2").onclick = task2;
document.getElementById("task3").onclick = task3;
document.getElementById("task4").onclick = task4;
document.getElementById("task5").onclick = task5;
document.getElementById("task6").onclick = task6;
document.getElementById("task7").onclick = task7;
document.getElementById("task8").onclick = task8;