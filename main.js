// Colock

setInterval(function () {
    let clock = new Date();
    let hour = clock.getHours();
    if(hour>12){
        hour = hour - 12;
    }
    if(hour<10){
        hour = `0${hour}`;
    }
    let minuts = clock.getMinutes();
    if(minuts<10){
        minuts = `0${minuts}`;
    }
    let second = clock.getSeconds();
    if(second<10){
        second = `0${second}`;
    }
    document.querySelector('.clock').innerHTML = `${hour} : ${minuts} : ${second}`    
}, 1000);

// nav

document.querySelector('.services-div').onclick = function() {
    document.querySelector('.services-menu').classList.toggle('open');
    document.querySelector('.pages-menu').classList.remove('open')
}
document.querySelector('.pages-div').onclick = function() {
    document.querySelector('.pages-menu').classList.toggle('open');
    document.querySelector('.services-menu').classList.remove('open')
}
// document.querySelectorAll('header ,  .toolbar').onclick = function() {
//     document.querySelector('.pages-menu').classList.remove('open');
//     document.querySelector('.services-menu').classList.remove('open')
// }

// btn up 

window.onscroll = function() {
    if(window.scrollY>=800){
        document.querySelector('.btn-up').style.display = 'flex';
    }
    else{
        document.querySelector('.btn-up').style.display = 'none';
    }
    document.querySelector('.btn-up').onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
}

// dark mood 

document.querySelector('.moon').onclick = function () {
    document.querySelector('.sun').classList.remove('dnone');
    document.querySelector('.moon').classList.add('dnone');
    document.querySelector('.dark-mood').classList.remove('switch-moon');
    document.querySelector('.dark-mood').classList.add('switch-sun');
    document.querySelector('body').classList.add('dark');

}
document.querySelector('.sun').onclick = function () {
    document.querySelector('.moon').classList.remove('dnone');
    document.querySelector('.sun').classList.add('dnone');
    document.querySelector('.dark-mood').classList.remove('switch-sun');
    document.querySelector('.dark-mood').classList.add('switch-moon');
    document.querySelector('body').classList.remove('dark');    
}
document.querySelector('.nav-menu').onclick = function () {
    document.querySelector('.nav-center ul').classList.toggle('menu-onclick');
}