// Coerção de tipos

// coerção de tipos implicita
let numero = 2
console.log(typeof (numero))
numero = '2'
console.log(typeof (numero))

// conversão de number em string e concatenação
let numeral = 3
let soma = numero + numeral
console.log(soma)

// coerção de tipos explicita
somatoria = Number(numero) + numeral
console.log(typeof (somatoria))

// uso de comparação ampla (desaconselhado)
'true' == true
false == 'false'

// uso de comparação estrita (o aconselhado)
'true' === true
false === 'false'
