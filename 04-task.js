// Los tramos impositivos para la declaración de la renta en un determinado país son los siguientes:

// Renta                                     Tipo impositivo
// Menos de 10000€                       5%
// Entre 10000€ y 20000€                15%
// Entre 20000€ y 35000€                20%
// Entre 35000€ y 60000€                30%
// Más de 60000€                              45%

// Escribir un programa que con una variable tenga del usuario su renta anual y muestre por pantalla lo que tiene que pagar.


let renta1 = 5;
let renta2 = 15;
let renta3 = 20;
let renta4 = 30;
let renta5 = 45;
let ingreso = prompt('INGRESA EL VALOR DE TU RENTA ')

if (ingreso <= 10000){
    alert(renta1 + '%')
}
else if (ingreso > 10000 && ingreso <= 20000){
    alert(renta2 + '%')
}
else if (ingreso > 20000 && ingreso < 35000){
    alert(renta3 + '%')
}
else if (ingreso >= 35000 && ingreso <= 60000){
    alert(renta4 + '%')
}
else if(ingreso > 60000){
    alert(renta5 + '%')
}