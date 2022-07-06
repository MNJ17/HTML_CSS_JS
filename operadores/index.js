// contatenação

let mensagem = "como vai?"
let saudacao = "Olá! " + mensagem
console.log(saudacao)

 adicionar +1
let num = 3
console.log('num', num++)

// convertendo strings em numeros

let entrada = '4'
let saida = '5'
console.log(+entrada + +saida)

// incrementar ou decrementar

let mais = 2
let menos = 8

console.log(++mais)
console.log(--menos)

//o ++number vai retornar o novo valor, ou seja, ele ja retorna o number+1 direto.
//já o number++ vai retornar primeiro o valor anterior e, so depois, o valor incrementado.

//precedencia

let calcular = 5 +2 * 3
let calculo = (5 +2) * 3
console.log(calculo)
console.log(calcular)

// operadores logicos

// E ou AND

var a1 =  true && true;
var a2 =  true && false;
var a3 = false && true;
var a4 = false && (3 == 4);
var a5 = "Gato" && "Cão";
var a6 = false && "Gato";
var a7 = "Gato" && false;

// OU OR

var o1 =  true || true;
var o2 = false || true;
var o3 =  true || false;
var o4 = false || (3 == 4);
var o5 = "Gato" || "Cão";
var o6 = false || "Gato";
var o7 = "Gato" || false;

// NEGAR ou NOT

var n1 = !true;
var n2 = !false;
var n3 = !"Gato";

// vírgula

for (var i = 0, j = 9; i <= 9; i++, j--)
  console.log("a[" + i + "][" + j + "]= " + a[i][j]);
