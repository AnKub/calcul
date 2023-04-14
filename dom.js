let a = ''; //первое число
let b = ''; //второе число
let sign = ''; //знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

// экран монитора калькулятора
const out = document.querySelector ('.calc-screen p');

function clearAll () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}
document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // нажата не кнопка, а бласть между 
    if (!event.target.classList.contains('btn')) return;
    // нажата кнопка ac clearAll
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';
    // получаю нажатую кнопку
    const key = event.target.textContent;

    // необходымо проверить нажата ли цифровая кнопка 0-9 || .
    if(digit.includes (key)) {
        if (b === '' && sign === '') {
        a+=key;
        out.textContent = a;
    } else if (a!== '' && b!== '' && finish) { 
        b = key;
        finish = false;
        out.textContent = b;
    }else {
        b += key;
        out.textContent = b;
    }
    console.log (a, b , sign);
    return;
    }
    // если необходимо совершить мат операцию нужно проверить
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case '+':
            a = (+a) + (+b);
            break;
            case '-':
            a = a - b;
            break;
            case 'X':
            a = a * b;
            break;
            case '/':
                if (b === '0') {
                    out.textContent = 'You broke all';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
            break;
        }
        finish= true;
        out.textContent = a;
        console.log (a, b, sign);
    }
}