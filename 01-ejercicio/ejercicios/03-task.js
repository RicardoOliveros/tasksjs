// Para tributar un determinado impuesto se debe ser mayor de 19 años y tener unos ingresos iguales o superiores a 2.500.000 mensuales. Escribir un programa que tenga 2 variables su edad y sus ingresos mensuales y muestre por pantalla si el usuario tiene que tributar o no.


let edad = 19;
let ingresos = 2500000;

let edad1 = prompt('ENTRA TU EDAD '); 
let ingresos2 = prompt('INGRESA TU SALARIO ');

if (edad1 >= edad && ingresos2 >= ingresos){
    alert('SI TIENE')
}
else if (edad1 < edad && ingresos2 < ingresos){
    alert('NO TIENE')
}



