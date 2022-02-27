"use strict"



let name = prompt("Привет, как тебя зовут");

console.log(name);

let type = prompt(name + ", выбери тип сайта");

let typePrice = "0р ты не выбрал тип сайта";

if (type == 1) {
    typePrice = " визитка(10р)";
};
if (type == 2) {
    typePrice = " корпоративный(15р)";
};
if (type == 3) {
    typePrice = " портал(20р)";
};
if (type == 4) {
    typePrice = " каталог(15р)";
};
if (type == 5) {
    typePrice = " магазин(20р)";
};
if (type == 6) {
    typePrice = " промо(15р)";
};

console.log(typePrice);

let design = prompt("Отлично, теперь выбери дизайн");

let designPrice = "0р чё без дизайна?";

if (design == 1){
    designPrice = " текстовый(15р)"
};
if (design == 2){
    designPrice = " полиграфический(10р)"
};
if (design == 3){
    designPrice = " интерфейсный(20р)"
};
if (design == 4){
    designPrice = " динамический(20р)"
};
if (design == 5){
    designPrice = " смешаный(??р)"
};

console.log(designPrice);

let adapt = prompt("нужна ли тебе адаптивная вёрстка?");

let adaptPrice = " без адаптивной вёрстки(0р)"
if(adapt == 1){
    adaptPrice = " с адаптивной вёрсткой(20р)"
};

console.log(adaptPrice);


alert("Итак, "+name + ", ты выбрал тип сайта"+ typePrice+" и"+ designPrice+" дизайн"+adaptPrice);




