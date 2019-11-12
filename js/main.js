'use strict'

{
    const cancel = document.getElementById('cancel');
    const change = document.getElementById('change');
    const white = document.getElementById('white');
    const white2 = document.getElementById('white2');
    const white3 = document.getElementById('white3');
    cancel.addEventListener('click', ()=> {
        white.classList.add('white');
    });
    cancel.addEventListener('click', ()=> {
        white2.classList.add('white');
    });
    cancel.addEventListener('click', ()=> {
        white3.classList.add('white');
    });
    change.addEventListener('click', ()=> {
        white.classList.remove('white');
    });
    change.addEventListener('click', ()=> {
        white2.classList.remove('white');
    });
    change.addEventListener('click', ()=> {
        white3.classList.remove('white');
    });
}