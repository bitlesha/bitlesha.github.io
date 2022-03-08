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








let abc;
/*let def;*/

let a;
let d;

$('#list1').on("change", function () {

    a = $('#list1').val();
    /*d = $('#list1')[days()];*/

    abc = +a;
    /*def = +d;*/

    $('#pric').text('Стоимость: ' + abc);
    $('#tim').text('Сроки: ' + abc/2);

});

let b;
let e;

$('#list2').on("change", function () {

    b = $('#list2').val();
    /*e = $('#list2').days();*/

    abc = +a + +b;
    /*def = +d + +e;*/

    $('#pric').text('Стоимость: ' + abc);
    $('#tim').text('Сроки: ' + abc/2);

});

let c;
let f;

$('#list3').on("change", function () {

    c = $('#list3').val();
    /*f = $('#list3').days();*/

    abc = +a + +b + +c;
    /*def = +d + +e + +f;*/

    $('#pric').text('Стоимость: ' + abc);
    $('#tim').text('Сроки: ' + abc/2);

});
