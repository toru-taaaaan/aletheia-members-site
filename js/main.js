'use strict'

{
    const cancel = document.getElementById('cancel');
    const change = document.getElementById('change');

    const white = document.getElementById('white');
    const white2 = document.getElementById('white2');
    const white3 = document.getElementById('white3');

    const inActiveImg = document.getElementById('inActive');
    const inActiveImg2 = document.getElementById('inActive2');
    const inActiveImg3 = document.getElementById('inActive3');

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

    cancel.addEventListener('click', ()=> {
        inActiveImg.classList.add('in-active-img');
    });
    cancel.addEventListener('click', ()=> {
        inActiveImg2.classList.add('in-active-img');
    });
    cancel.addEventListener('click', ()=> {
        inActiveImg3.classList.add('in-active-img');
    });

    change.addEventListener('click', ()=> {
        inActiveImg.classList.remove('in-active-img');
    });
    change.addEventListener('click', ()=> {
        inActiveImg2.classList.remove('in-active-img');
    });
    change.addEventListener('click', ()=> {
        inActiveImg3.classList.remove('in-active-img');
    });
}