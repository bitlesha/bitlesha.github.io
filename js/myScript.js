"use strict"

$(document).ready(function () {
    $('.image-link').magnificPopup({
        type: 'image'
    });

    let option = {
        threshold: [0.25]
    };
    let observ = new IntersectionObserver(onEntr, option);
    let element = $('.image-load');
    element.each((i, el) => {
        observ.observe(el);

    })

    new WOW().init();

    $("#phone_1").mask("8(99) 999-9999");

    $('form').subbmit(function (event) {
        event.preventDefault();

        $.ajax({
            type: "POST",
            url: "php/mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Сообщение отправлено");
            $("form").trigger("reset");

        });
        return false;

    });


});


function onEntr(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.src = change.target.dataset.src;
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
    $('#tim').text('Сроки: ' + abc / 2);

});

let b;
let e;

$('#list2').on("change", function () {

    b = $('#list2').val();
    /*e = $('#list2').days();*/

    abc = +a + +b;
    /*def = +d + +e;*/

    $('#pric').text('Стоимость: ' + abc);
    $('#tim').text('Сроки: ' + abc / 2);

});

let c;
let f;

$('#list3').on("change", function () {

    c = $('#list3').val();
    /*f = $('#list3').days();*/

    abc = +a + +b + +c;
    /*def = +d + +e + +f;*/

    $('#pric').text('Стоимость: ' + abc);
    $('#tim').text('Сроки: ' + abc / 2);

});
