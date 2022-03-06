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
            cena1 = 10;
            vremya1 = 5;
            break
        case "opt2":
            cena1 = 25;
            vremya1 = 12.5;
            break
        case "opt3":
            cena1 = 15;
            vremya1 = 7.5;
            break
        case "opt4":
            cena1 = 15;
            vremya1 = 7.5;
            break
        case "opt5":
            cena1 = 25;
            vremya1 = 12.5;
            break
        case "opt6":
            cena1 = 15;
            vremya1 = 7.5;
            break
        default:
            cena1 = 0;
            vremya1 = 0;
            break
    }

    let design = document.getElementById('list2').value;

    switch (design) {
        case "opt1":
            cena2 = 10;
            vremya2 = 5;
            break
        case "opt2":
            cena2 = 11;
            vremya2 = 5;
            break
        case "opt3":
            cena2 = 12;
            vremya2 = 5;
            break
        case "opt4":
            cena2 = 13;
            vremya2 = 5;
            break
        case "opt5":
            cena2 = 14;
            vremya2 = 5;
            break
        default:
            cena = 0;
            vremya = 0;
            break
    }

    let adaptive = document.getElementById('list3').value;

    switch (adaptive) {
        case "opt1":
            cena3 = 0;
            vremya3 = 0;
            break
        case "opt2":
            cena3 = 25;
            vremya3 = 12.5;
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
        let time = vremya1 + vremya2 + vremya3;
        document.getElementById('time').innerHTML = time;

        let price = cena1+ cena2+ cena3;
        document.getElementById('price').innerHTML = price;
    }
}
