let arr = ['icon-happy', 'icon-smile', 'icon-tongue2', 'icon-wink', 'icon-grin2', 'icon-angry2', 'icon-evil2', 'icon-shocked', 'icon-baffled', 'icon-confused2', 'icon-confused', 'icon-neutral', 'icon-shocked', 'icon-cool', 'icon-wink2'];
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let number = document.getElementById('number');
let el = document.querySelectorAll('.el');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let windowGame = document.getElementById('window');


// level 1
// start.addEventListener('click', () => {
//     el.forEach(element => {
//         element.classList.add('show');
//     })
// })

// stop.addEventListener('click', () => {
//     el.forEach(element => {
//         element.classList.remove('show');
//     })
// })

// level 2
// start.addEventListener('click', () => {
//     minus.classList.remove('disabled');
//     plus.classList.remove('disabled');
// })

// stop.addEventListener('click', () => {
//     minus.classList.add('disabled');
//     plus.classList.add('disabled');
// })

// plus.addEventListener('click', () => {
//     let arrL = arr.length;
//     let random = Math.floor(Math.random() * arrL);
//     let icon = arr[random];
//     let div = document.createElement('div');
//     div.classList.add('el');
//     let span = document.createElement('span');
//     span.classList.add(icon);
//     div.appendChild(span);
//     windowGame.appendChild(div);
// })

// minus.addEventListener('click', () => {
//     windowGame.firstChild.remove();
// })

// level 3
start.addEventListener('click', () => {
    minus.classList.remove('disabled');
    plus.classList.remove('disabled');
})

stop.addEventListener('click', () => {
    minus.classList.add('disabled');
    plus.classList.add('disabled');
    let elements = document.querySelectorAll('.el');

    elements.forEach(() => {
        windowGame.firstChild.remove();
    });
    let el = document.querySelectorAll('.el');
    console.log(el.length);
    number.innerText = el.length;
})

plus.addEventListener('click', () => {
    let arrL = arr.length;
    let random = Math.floor(Math.random() * arrL);
    let icon = arr[random];
    let div = document.createElement('div');
    div.classList.add('el');
    let span = document.createElement('span');
    span.classList.add(icon);
    div.appendChild(span);
    windowGame.appendChild(div);
    let el = document.querySelectorAll('.el');
    console.log(el.length);
    number.innerText = el.length;
    minus.classList.remove('disabled');
})

minus.addEventListener('click', () => {
    windowGame.firstChild.remove();
    let el = document.querySelectorAll('.el');
    if (el.length > 0) {

    } else {
        minus.classList.add('disabled');
    }
    number.innerText = el.length;
})

// windowGame.addEventListener('change', (el) => {
//     console.log(el);
//     // console.log(elements)
// })

