//preço do combustivel
const precoCombustivel = 5.85;
// distancia km da viagem
let distanciaViagem = 460;
//gasto medio de gasolina
const gastoMedioGasolina = 10;

const litrosNecessarios = distanciaViagem / gastoMedioGasolina;

console.log(litrosNecessarios);

let gastoTotal = litrosNecessarios * precoCombustivel;

console.log("O total a ser pago é: R$ " + gastoTotal);
