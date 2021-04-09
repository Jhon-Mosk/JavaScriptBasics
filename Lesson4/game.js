/**
 * Объект с настройками игры.
 * @property {int} rowsCount Количество строк в карте.
 * @property {int} colsCount Количество колонок в карте.
 */
const config = {
    rowsCount: 10,
    colsCount: 10,
};

/**
 * Объект игрока, здесь будут все методы и свойства связанные с ним.
 * @property {int} x Позиция по X-координате.
 * @property {int} y Позиция по Y-координате.
 */
const player = {
    x: 0,
    y: 0,    
    moveHistory: [{ // история ходов
        x: 0,
        y: 0,            
    }],

    /**
     * Двигает игрока по переданному направлению.
     * @param {{x: int, y: int}} nextPoint Следующая точка пользователя.
     */
    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;        
    },
};

let renderer = {
    // Сюда запишем все что надо отобразить.
    map: "",

    /**
     * Отображает игру в консоли.
     */
    render() {
        // Цикл перебирает все строки, которые надо отобразить.
        for (let row = 0; row < config.rowsCount; row++) {
            // В каждой строке отображаем для каждой колонки (x - клетка, o - игрок).
            for (let col = 0; col < config.colsCount; col++) {
                // Проверяем, если на данной позиции должен быть и игрок, отображаем игрока, если нет - клетку.
                if (player.y === row && player.x === col) {
                    this.map += 'o ';
                } else {
                    this.map += 'x ';
                }
            }
            // После того как отобразили всю строку делаем переход на следующую строку.
            this.map += '\n';
        }

        // Выводим все что надо отобразить в игре.
        console.log(this.map);
    },

    clear() {
        // Чистим консоль.
        console.clear();
        // Чистим карту.
        this.map = "";
    }
};

let mover = {
    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        // Доступные значения ввода.
        const availableDirections = ['w', 'a', 's', 'd', 'n'];

        while (true) {
            // Получаем от пользователя направление.
            let direction = prompt('Введите букву (w, a, s или d), куда вы хотите переместиться, "Отмена" для выхода. Для отображения опредлённого хода, введите n');
            if (!direction) {
                return null;
            }

            // Если направление не одно из доступных, то сообщаем что надо ввести корректные данные
            // и начинаем новую итерацию.
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одну из букв w, a, s или d. Для отображения опредлённого хода, введите n');
                continue;
            }

            // Если пользователь ввел корректное значение - отдаем его.
            return direction;
        }
    },

    moveNumber() { // отображает историю ходов
        while (true) {
            let n = prompt("Введите номер хода, который хотите увидеть. Для выхода х");

            if (n == 'x' || n == 'х') { //если номер хода х - тогда выходим
                break;                
            } else if (parseInt(n) < 0 || isNaN(parseInt(n)) || parseInt(n) > player.moveHistory.length-1) {
                alert("Такого хода не существует") //если номер хода отрицательный или строка или больше существующих ходов, выводим предупреждение
                continue; //и возвращаемся к запросу номера хода
            } else {
                renderer.clear();  
                player.move(player.moveHistory[parseInt(n)]); //достаём из истории положение игрока
                renderer.render(); //если все проверки пройдены выводим положение игрока на этом ходе
                continue; //и возвращаемся к запросу номера хода
            }
        }
    },

    checkTruePosition(direction) { //проверка не вышел ли игрок за поле
        const nextPosition = {
            x: player.x,
            y: player.y,            
        };
        
        switch (direction) {
            case 's':                
                nextPosition.y++;
                if (nextPosition.y >= 0 && nextPosition.y < config.rowsCount) {
                    return direction; //если в пределах поля возвращаем направление
                } else { //если вышел за пределы поля, используем рекурсию и мучаем пока не вернётся на поле или не сдасться:)
                    return mover.checkTruePosition(mover.truePositionFalse(direction));
                }
            case 'a':
                nextPosition.x--;
                if (nextPosition.x >= 0 && nextPosition.x < config.colsCount) {
                    return direction; //если в пределах поля возвращаем направление
                } else { //если вышел за пределы поля, используем рекурсию и мучаем пока не вернётся на поле или не сдасться:)
                    return mover.checkTruePosition(mover.truePositionFalse(direction));
                }                
            case 'd':
                nextPosition.x++;
                if (nextPosition.x >= 0 && nextPosition.x < config.colsCount) {
                    return direction; //если в пределах поля возвращаем направление
                } else { //если вышел за пределы поля, используем рекурсию и мучаем пока не вернётся на поле или не сдасться:)
                    return mover.checkTruePosition(mover.truePositionFalse(direction));
                }                
            case 'w':
                nextPosition.y--;
                if (nextPosition.y >= 0 && nextPosition.y < config.rowsCount) {
                    return direction; //если в пределах поля возвращаем направление
                } else { //если вышел за пределы поля, используем рекурсию и мучаем пока не вернётся на поле или не сдасться:)
                    return mover.checkTruePosition(mover.truePositionFalse(direction));
                }                
            case 'n':
                return direction;  //возвращаем n
        };               
        
    },

    truePositionFalse(direction) { //если игрок вышел за пределы поля
        alert("Вы вышли за пределы поля"); //предупреждаем 
        return mover.getDirection(); //запрашиваем направление
    },

    /**
     * Отдает следующую точку в которой будет находиться пользователь после движения.
     * @param {int} direction Направление движения игрока.
     * @returns {{x: int, y: int}} Следующая позиция игрока.
     */

    getNextPosition(direction) {
        // Следующая точка игрока, в самом начале в точке будут текущие координаты игрока.
        const nextPosition = {
            x: player.x,
            y: player.y,            
        };
        // Определяем направление и обновляем местоположение игрока в зависимости от направления.
        switch (direction) {
            case 's':
                nextPosition.y++;                
                player.moveHistory.push(nextPosition);
                break;
            case 'a':
                nextPosition.x--;                
                player.moveHistory.push(nextPosition);
                break;
            case 'd':
                nextPosition.x++;               
                player.moveHistory.push(nextPosition);
                break;
            case 'w':
                nextPosition.y--;                
                player.moveHistory.push(nextPosition);
                break;
            case 'n':
                mover.moveNumber();
                break;
        }

        return nextPosition;
    },
};

let game = {
    /**
     * Запускает игру.
     */
    run() {
        // Бесконечный цикл
        while (true) {
            // Получаем направление от игрока.
            const direction = mover.getDirection();

            // Если игрок сказал что хочет выйти, то игра заканчивается.
            if (direction === null) {
                console.log("Игра окончена.");
                return;
            }
            // Получаем следующую точку пользователя в зависимости от направления.
            const nextPoint = mover.getNextPosition(mover.checkTruePosition(direction));

            renderer.clear();
            player.move(nextPoint);
            renderer.render();

        }
    },    

    // Этот метод выполняется при открытии страницы.
    init() {
        console.log("Ваше положение на поле в виде о.");
        // Отображаем нашу игру.
        renderer.render();
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");        
    }
};

game.init();
