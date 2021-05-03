//1. Для практикума из занятия 7 продумать, где можно применить замыкания.

//2. Не выполняя кода, ответить, что выведет браузер и почему:
if (!("a" in window)) {
    var a = 1;
}
alert(a); //undefined, так как условие if не сработало

var b = function a(x) {
    x && a(--x);
};
alert(a); //undefined, так как функция задана через переменную b

function a(x) {
    return x * 2;
}
var a;
alert(a); 
/*function a(x) {
    return x * 2;
}
*/ //так как в переменной а ссылка на функцию

function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3); //10 так как третьему аргументу было присвоено значение 10

function a() {
    alert(this);
}
a.call(null); // window так как с помощью call this было спрошено до null, а самый главный элемент это window

sayHi("df");

var sayHi = function (name) {
    console.log(name)
}