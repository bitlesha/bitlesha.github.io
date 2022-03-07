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

let a;

$('#list1').on("change", function () {

    a = $('#list1').val();

    abc = +a;

    $('#pric').text('Стоимость: ' + abc);

});

let b;

$('#list2').on("change", function () {

    b = $('#list2').val();

    abc = +a + +b;

    $('#pric').text('Стоимость: ' + abc);

});

let c;

$('#list3').on("change", function () {

    
    c= $('#list3').val();

    abc = +a + +b + +c;

    $('#pric').text('Стоимость: ' + abc);

});
