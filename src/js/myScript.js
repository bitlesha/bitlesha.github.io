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



let a = $('#list1').val();
let b = $('#list2').val();
let c = $('#list3').val();
let abc



$('#list1').on("change", function () {
    
    abc =+ a;
    
$('#pric').text('Стоимость: ' + +a);
    

});


$('#list2').on("change", function () {
    
    abc =+ a;

    $('#pric').text('Стоимость: ' + (+a+ +b+ +c));

});


$('#list3').on("change", function () {
    
    abc =+ a;

    $('#pric').text('Стоимость: ' + (+a+ +b+ +c));

});
