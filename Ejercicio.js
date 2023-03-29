// let name = prompt('Intrduce tu nombre')
// let age = parseInt(prompt('Intrduce tu nombre'))


// console.log(`Hola  ${name} tienes ${age} años y el año que viene tendras ${age+1} años`)

// ---------------------------------------------------------------------------------------------------------------------------------------------------

let figura1 = prompt('Introduce la figura geometrica que quieres calcular: triangulo, rectangulo, circulo')

let base;
let lado;
let radio;

switch(figura1){
    case 'triangulo':
        base=prompt('intriduce la base del triangulo')
        lado=prompt('intoduce la altura del triangulo')
        console.log(`El area del triangulo es de ${(base*lado)/2}`);
    
    case 'rectangulo':
        base=prompt('Introdusca la base del rectangulo')
        lado=prompt('Introdusca el lado del rectangulo')
        console.log(`El area del rectangulo es de ${(base*lado)}`);

    case 'circulo':
        radio=prompt('Introduce el radio del circulo')
        console.log(`El radio del circulo es ${Math.PI * Math.pow(radio,2)}`);
        break
    default: console.log('La figura geometrica no es valida')
}

console.log("Edison es un bobo hptaaaaa")

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// let numero = parseInt(prompt('Introduce un numero'))

// for (let i=1; i<=numero; i++){

//     if(i%2==0){
//         console.log(`${i} - es par`);
//     }else {
//         console.log(`${i} - es impar`);
//     }
// }
// ---------------------------------------------------------------------------------------------------------------------------------------------------

//  let num = parseInt(prompt('Introduce un numero: '))
//  let divisor=0;

//  if(num===1) console.log ('El numero 1 no es valido');
//  else{
//      for(let i=2; i<num; i++){
//          if(num % i == 0){
//              console.log(`${num} / ${i} = ${num/i} No es primo`)
//              divisor++
//              break
//          }
//      }
//  }
//  if(divisor==0)console.log(`${num} es primo`)

// ---------------------------------------------------------------------------------------------------------------------------------------------------

//let num = parseInt(prompt('Introduce un numero: '))
//let resultado=1

//for(let i = num; i>0; i--){
  //  resultado *= i
//}
//console.log(`El resultado factorial de ${num} es ${resultado}`)
