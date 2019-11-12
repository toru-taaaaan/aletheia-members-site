'use strict'

{
    const btn = document.getElementById('btn');
    const white = document.getElementById('white');
    const white2 = document.getElementById('white2');
    const white3 = document.getElementById('white3');
    btn.addEventListener('click', ()=> {
        white.classList.add('white');
    });
    btn.addEventListener('click', ()=> {
        white2.classList.add('white');
    });
    btn.addEventListener('click', ()=> {
        white3.classList.add('white');
    });
}