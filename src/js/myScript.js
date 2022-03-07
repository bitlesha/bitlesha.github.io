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







$('#list1').on("change", function () {



    var a = $('#list1').val();
    var b = $('#list2').val();
    var c = $('#list3').val();


    if (a == '0') {
        alert("ты не указал тип сайта")
    } else if (b == '0') {
        alert("ты не указал дизайн сайта")
    } else if (c == '0') {
        alert("ты не указал нужна ли тебе адаптивная верстка")
    } else {
        
        $('#price').html('Стоимость: ' + (+a + +b + +c));




    }


});
