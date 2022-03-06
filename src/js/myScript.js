"use strict"

$(document).ready(function () {
    $('.image-link').magnificPopup({
        type: 'image'
    });

    let options = {
        threshold: [1]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.numb_animation');
    elements.each((i, el) => {
        observer.observe(el);

    })


    let option = {
        threshold: [0.25]
    };
    let observ = new IntersectionObserver(onEntr, option);
    let element = $('.image-load');
    element.each((i, el) => {
        observ.observe(el);

    })


});


function onEntr(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.src = change.target.dataset.src;
        }
    });
}


function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show-animation');
        }
    });
}







function raschitat() {

    let cena;

    let vremya;

    let type = document.getElementById('list1').value;

    switch (type) {
        case "opt1":
            cena = 10;
            vremya = 5;
            break
        case "opt2":
            cena = 25;
            vremya = 12.5;
            break
        case "opt3":
            cena = 15;
            vremya = 7.5;
            break
        case "opt4":
            cena = 15;
            vremya = 7.5;
            break
        case "opt5":
            cena = 25;
            vremya = 12.5;
            break
        case "opt6":
            cena = 15;
            vremya = 7.5;
            break
        default:
            cena = 0;
            vremya = 0;
            break
    }

    let design = document.getElementById('list2').value;

    switch (design) {
        case "opt1":
            cena = 10;
            vremya = 5;
            break
        case "opt2":
            cena = 11;
            vremya = 5;
            break
        case "opt3":
            cena = 12;
            vremya = 5;
            break
        case "opt4":
            cena = 13;
            vremya = 5;
            break
        case "opt5":
            cena = 14;
            vremya = 5;
            break
        default:
            cena = 0;
            vremya = 0;
            break
    }

    let adaptive = document.getElementById('list3').value;

    switch (adaptive) {
        case "opt1":
            cena = 0;
            vremya = 0;
            break
        case "opt2":
            cena = 25;
            vremya = 12.5;
            break
        default:
            cena = 0;
            vremya = 0;
            break
    }
    if (type == 'opt0') {
        alert("ты не указал тип сайта")
    } else if (design == 'opt0') {
        alert("ты не указал дизайн сайта")
    } else if (adaptive == 'opt0') {
        alert("ты не указал нужна ли тебе адаптивная верстка")
    } else {
        time = time, design, adaptive;
        $(document).getElementById('time').innerHTML = time;

        price = cena(type) + cena(design) + cena(adaptive);
        $(document).getElementById('price').innerHTML = price;
    }
}
