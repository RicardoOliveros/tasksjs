// Investigar y realizar un programa que dependiendo del dato IMC que se ingrese, se determina que peso tiene la persona.

// formula = peso / estatura^2

let peso = prompt('ENTER YOUR WEIGHT ')
let estatura = prompt('ENTER YOUR HEIGHT IN mts ')
let imc = peso / Math.pow(estatura, 2);

// • Si su IMC es inferior a 18.5, está dentro de los valores correspondientes a “delgadez o bajo peso".
// • Si su IMC es entre 18.5 y 24.9, está dentro de los valores "normales" o de peso saludable.
// • Si su IMC es entre 25.0 y 29.9, está dentro de los valores correspondientes a "sobrepeso".
// • Si su IMC es 30.0 o superior, está dentro de los valores de "obesidad".

if (imc <= 18.5){
    alert(`Your imc is ${imc} "thin or underweight"`)
}
else if (imc > 18.5 && imc <= 24.9){
    alert(`Your imc is ${imc} "healthy"`)
}

else if (imc > 25 && imc < 29.9){
    alert(`Your imc is ${imc} "overweight"`)
}
else if (imc >= 30){
    alert(`Your imc is ${imc} "obesity"`)
}
