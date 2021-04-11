// На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»
let millionaire = {
    start() {
        const yes = confirm('Хотите сыграть в игру?');
    
        if (!yes) {
            return;
        }    
        
        alert("Сможете отгадать?");

        for (let key in questionAnswer) {
            action.enigma(key, questionAnswer[key]);
        }            

        alert("Количество правильных ответов: " + trueAnswerCount + "\nКПД угадывания: "
            + (trueAnswerCount * 100 / Object.keys(questionAnswer).length).toFixed(2) + " %");
    }
};

let questionAnswer = {
    "Зимой и летом одним цветом?": ["ель", "елка", "ёлка"],
    "Два конца, два кольца, по середине гвоздик?": ["ножницы"],
    "Четыре братца под одной крышей стоят?": ["табуретка", "стул"],
    "Сто одёжек и все без застёжек?": ["капуста"],
    "В Полотняной стране\nПо реке Простыне\nПлывет пароход\nТо назад, то вперед,\nА за ним такая гладь —\nНи морщинки не видать.": ["утюг"],
    "Стучит,\nГремит,\nВертится,\nХодит весь\nСвой век,\nА не человек.": ["настенные часы", "часы", "часики"],
    "Дом открыт\nсо всех сторон.\nВ доме —\nТысячи колонн.\nНад колоннами —\nШатры.\nПод колоннами —\nКовры.\nТам живут —\nИ в коврах,\nИ в колоннах,\nИ в шатрах.": ["лес"],  
};

let action = {
    enigma(question, arrAnswer) {
        
        alert(question);
        var userAnswer = prompt("Что это?");
        userAnswer = userAnswer.toLowerCase();
        action.trueAnswer(userAnswer, arrAnswer);
        
    },
    
    trueAnswer(answer, arrAnswer) {
        for (let i = 0; i < arrAnswer.length; i++) {            
            if (answer == arrAnswer[i]) {
                trueAnswerCount++;
                alert("Верно.");
                return;
            }        
        }
        alert("А вот и нет. Правильный ответ: " + arrAnswer[0]);        
    },
};

var trueAnswerCount = 0;
