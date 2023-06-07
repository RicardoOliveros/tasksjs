
let peso = prompt('ENTER YOUR WEIGHT ')
let estatura = prompt('ENTER YOUR HEIGHT IN mts ')
let imc = peso / Math.pow(estatura, 2);

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
