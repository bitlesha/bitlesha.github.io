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







$('#raschitat').click(function () {



    let value1 = $('#list1').val();
    let value2 = $('#list2').val();
    let value3 = $('#list3').val();


    if (value1 == 'opt1') {
        alert("ты не указал тип сайта")
    } else if (value2 == 'opt2') {
        alert("ты не указал дизайн сайта")
    } else if (value3 == 'opt3') {
        alert("ты не указал нужна ли тебе адаптивная верстка")
    } else {

        $('#price').html('Стоимость: ' + (value1+ value2+ value3));



    }


});
