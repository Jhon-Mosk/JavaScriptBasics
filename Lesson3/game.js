const RANDOM_MIN_NUMBER = 1;
const RANDOM_MAX_NUMBER = 9;

const NUMBER_OF_DIGITS = 4;
const NUMBER_OF_ATTEMPTS = 5;

function start() {
    const yes = confirm('Хотите сыграть в игру?');

    if (!yes) {
        return;
    }

    play();
}

function play() {
    const generated = getSecretNumber(NUMBER_OF_DIGITS);
    console.log(generated);

    let entered = null;
    let attempts = 0;

    while (true) {
        const prompted = prompt('Введите число');

        if (isNaN(Number(prompted))) {
            continue;
        }

        entered = prompted.split('');
        attempts++

        let cows = 0;
        let bulls = 0;
        let bullsPlace = [];
        for (let i = 0; i < generated.length; i++) {
            bullsPlace[i] = 'x';
            if (generated[i] === Number(entered[i])) {
                bulls += 1;
                bullsPlace[i] = 'b';
            } else if (generated.includes(Number(entered[i]))) {
                cows += 1;
                bullsPlace[i] = 'x';
            }
        }

        alert(`Быков: ${bulls}. Коров: ${cows}`);
        alert(`Быки на позициях: ${bullsPlace}`);

        if (attempts === NUMBER_OF_ATTEMPTS && bulls !== NUMBER_OF_DIGITS) {
            alert('Ты проиграл. Число было: ' + generated);
            break;
        }

        if (attempts === NUMBER_OF_ATTEMPTS || bulls === NUMBER_OF_DIGITS) {
            alert('Ты выиграл.');
            break;
        }
    }
}

function getSecretNumber(digits) {
    const secret = [];

    for (let i = 0; i < digits; i++) {
        let generated;

        do {
            generated = getRandomNumber(1, 9);
        }
        while (secret.includes(generated))

        secret.push(generated);
    }

    return secret;
}

function getRandomNumber(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}
