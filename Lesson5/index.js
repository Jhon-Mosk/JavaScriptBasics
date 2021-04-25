let chessBoard = {

    size: 8, //размер шахматного поля
    pole: [],
    descCell: [], //буквенные подписи к клеткам
    descCellNumber: [], //цифровые подписи к клеткам
    figures: {//фигуры
        rookWhite1: {//Ладья - rook
            row: 7,
            colum: 0,
            view: "&#9814",
        },
        rookWhite2: {//Ладья - rook
            row: 7,
            colum: 7,
            view: "&#9814",
        },
        knightWhite1: {//конь - knigh
            row: 7,
            colum: 1,
            view: "&#9816",
        },
        knightWhite2: {//конь - knigh
            row: 7,
            colum: 6,
            view: "&#9816",
        },
        bishopWhite1: {//слон - bishop
            row: 7,
            colum: 2,
            view: "&#9815",
        },
        bishopWhite2: {//слон - bishop
            row: 7,
            colum: 5,
            view: "&#9815",
        },
        queenWhite: {//ферзь - queen
            row: 7,
            colum: 3,
            view: "&#9813",
        },
        kingWhite: {//король - king
            row: 7,
            colum: 4,
            view: "&#9812",
        },
        pawnWhite1: {//пешка - pawn
            row: 6,
            colum: 0,
            view: "&#9817",
        },
        pawnWhite2: {//пешка - pawn
            row: 6,
            colum: 1,
            view: "&#9817",
        },
        pawnWhite3: {//пешка - pawn
            row: 6,
            colum: 2,
            view: "&#9817",
        },
        pawnWhite4: {//пешка - pawn
            row: 6,
            colum: 3,
            view: "&#9817",
        },
        pawnWhite5: {//пешка - pawn
            row: 6,
            colum: 4,
            view: "&#9817",
        },
        pawnWhite6: {//пешка - pawn
            row: 6,
            colum: 5,
            view: "&#9817",
        },
        pawnWhite7: {//пешка - pawn
            row: 6,
            colum: 6,
            view: "&#9817",
        },
        pawnWhite8: {//пешка - pawn
            row: 6,
            colum: 7,
            view: "&#9817",
        },
        rookBlack1: {//Ладья - rook
            row: 0,
            colum: 0,
            view: "&#9820",    
        },
        rookBlack2: {//Ладья - rook
            row: 0,
            colum: 7,
            view: "&#9820",    
        },
        knightBlack1: {//конь - knigh
            row: 0,
            colum: 1,
            view: "&#9822",   
        },
        knightBlack2: {//конь - knigh
            row: 0,
            colum: 6,
            view: "&#9822",   
        },
        bishopBlack1: {//слон - bishop
            row: 0,
            colum: 2,
            view: "&#9821",    
        },
        bishopBlack2: {//слон - bishop
            row: 0,
            colum: 5,
            view: "&#9821",    
        },
        queenBlack: {//ферзь - queen
            row: 0,
            colum: 3,
            view: "&#9819",    
        },
        kingBlack: {//король - king
            row: 0,
            colum: 4,
            view: "&#9818",    
        },
        pawnBlack1: {//пешка - pawn
            row: 1,
            colum: 0,
            view: "&#9823",
        },
        pawnBlack2: {//пешка - pawn
            row: 1,
            colum: 1,
            view: "&#9823",
        },
        pawnBlack3: {//пешка - pawn
            row: 1,
            colum: 2,
            view: "&#9823",
        },
        pawnBlack4: {//пешка - pawn
            row: 1,
            colum: 3,
            view: "&#9823",
        },
        pawnBlack5: {//пешка - pawn
            row: 1,
            colum: 4,
            view: "&#9823",
        },
        pawnBlack6: {//пешка - pawn
            row: 1,
            colum: 5,
            view: "&#9823",
        },
        pawnBlack7: {//пешка - pawn
            row: 1,
            colum: 6,
            view: "&#9823",
        },
        pawnBlack8: {//пешка - pawn
            row: 1,
            colum: 7,
            view: "&#9823",
        },
    },

    
    fillPole() { //заполняем поле
        for(let i = 0; i < chessBoard.size; i++) { //заполняем поле белыми и чёрными клеточками
            chessBoard.pole[i] = [];
            for(let j = 0; j < chessBoard.size; j++) {
                let cell = document.createElement("div");//создаём клетку
                chessBoard.fillPoleDesc(i, j);
                if (i % 2 == 0) {//если чётная строка
                    if (j % 2 == 0) {//если чётная то белая
                        cell.className = "board-cell-white";//присваиваем класс
                    } else {//если не чётная то чёрная
                        cell.className = "board-cell-black";//присваиваем класс
                    }
                } else {//если не чётная строка
                    if (j % 2 == 0) {//если чётная то чёрная
                        cell.className = "board-cell-black";//присваиваем класс
                    } else {//если не чётная то белая
                        cell.className = "board-cell-white";//присваиваем класс
                    }
                }
                chessBoard.pole[i][j] = cell;//записываем клетку в массив
            }        
        }
        
        boardDesc.append(...chessBoard.descCell);//выводим буквы
        boardDescNumber.append(...chessBoard.descCellNumber);//выводим цифры        
    },

    fillPoleDesc(i, j) {
        if(i == 0 && j == 0) { //пустая клетка в верхнем левом углу
            let cell = document.createElement("div");
            cell.className = "board-desc__cell";
            chessBoard.descCell.push(cell);
        }

        if(i == 0) { //буквенные подписи
            let cell = document.createElement("div");//создаём клетку
            cell.className = "board-desc__cell";//присваиваем класс                   
            cell.insertAdjacentHTML("beforeend", "&#" + (65 + j));
            chessBoard.descCell.push(cell);               
        }
        
        if(i >= 0 && j == 0) {//цифровые подписи
            let cell = document.createElement("div");//создаём клетку
            cell.className = "board-desc__cell";//присваиваем класс
            cell.innerHTML = i + 1;//задаём цифру
            chessBoard.descCellNumber.push(cell);//записываем в массив
        }
    },

    displayPole() {//выводим клеточки доски
        for(let i = 0; i < chessBoard.size; i++) {            
            for(let j = 0; j < chessBoard.size; j++) {                
                board.append(chessBoard.pole[i][j]);//выводим на экран                                          
            }
        }
    },    

    fillFigures() {//отображаем фигуры
        for(let key in chessBoard.figures) { //пробегаем по всем фигурам           
            chessBoard.pole[chessBoard.figures[key].row][chessBoard.figures[key].colum].innerHTML = chessBoard.figures[key].view; //отображаем на поле фигуру
        }        
    }
};

chessBoard.fillPole();//заполняем поле
chessBoard.displayPole();//выводим клеточки доски
chessBoard.fillFigures();//отображаем фигуры