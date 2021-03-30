function task1() {
    alert("Конвектор градусов Цельсия в градусы Фаренгейта");
    // var degreesCelsius;
    for (let i = 3; i > 0; i++) {
        var degreesCelsius = prompt("Введите градусы Цельсия");
        if (degreesCelsius <= 0 || degreesCelsius >= 0) {
            var degreesFahrenheit = (9 / 5) * degreesCelsius + 32;
            alert("Температура по Фаренгейту равна: " + degreesFahrenheit);
            break;
        }
    }
}

function task2() {
    var admin;
    var name = "Василий";
    admin = name;
    alert(admin);
}

function task3() {
    alert("JS-выражение 1000 + '108'? будет равно: 1000108");
}

function task4() {
    alert("С атрибуты тега script (async и defer) разобрался");
}

document.getElementById("task1").onclick = task1;
document.getElementById("task2").onclick = task2;
document.getElementById("task3").onclick = task3;
document.getElementById("task4").onclick = task4;