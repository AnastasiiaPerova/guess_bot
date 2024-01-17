const gameBotFunction = function () {

    //Функция генератора случайного числа:
    function randomGenerate(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }




    let mysteryNumber = randomGenerate(1, 100);
    let answerNum = '';
    //кол-во попыток:
    let tries = 3;




    const checkNumber = function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    }



    return function getResult() {

        answerNum = prompt('Угадайте число от 0 до 100?');

        //Условие при котором, пользователь нажал отмена:
        if (answerNum === null) {
            alert('Вы завершили игру');
            return;
        }

        while (!checkNumber(answerNum) || answerNum.trim() === '') {
            alert('Вы ввели строку!');
            answerNum = prompt('Угадайте число от 0 до 100?')
        }

        answerNum = Number(answerNum);




        //Условие для загаданного числв:
        if (mysteryNumber > answerNum) {
            alert('Загаданное число больше ' + 'Осталось попыток ' + tries);
        } else if (mysteryNumber < answerNum) {
            alert('Загаданное число меньше ' + 'Осталось попыток ' + tries);
        } else if (mysteryNumber === answerNum) {
            const isNewGame = confirm('Вы угадали число! Хотели бы сыграть еще ра?')

            if (isNewGame) {
                tries = 3;
                mysteryNumber = randomGenerate(1, 100);
            } else {
                tries = 0;
            }
        }




        if (tries > 0) {
            tries--;
            getResult();
        } else {
            const mayAgain = confirm('Попытки закончилиьс! Хотите попробовать еще раз?');

            if (mayAgain === true) {
                tries = 3;
                getResult();
            } else {
                alert('Вы завершили игру!');
                return
            }
        }
    }
}



let launchGameBot = gameBotFunction();
launchGameBot();