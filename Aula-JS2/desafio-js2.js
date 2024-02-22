//Viagem 5 Variveis - 1- preço etanol 2- preço gas - 3 tipo de gasolina no carro- 4 gasto medio de compostivel por km - 4 distancia em km da viagem

const precoEtanol =  3.42;
const precoGasolina =  5.58;
const distanciaEmKm =  800;
var gastoMedioGasolina = 11;
var tipoCombutivel =  'gasolina';

//

var litrosNecessarios =  distanciaEmKm / gastoMedioGasolina ;
console.log(litrosNecessarios);

if (tipoCombutivel === 'etanol') {
    var gastoTotal =  litrosNecessarios * precoEtanol;
    console.log('O consumo de combustível é de: ', gastoTotal);

} else if(tipoCombutivel ==='gasolina'){
    var gastoTotal =  litrosNecessarios * precoGasolina;
    console.log('O consumo de combustível é de: ', gastoTotal);

}else{
    console.log("Erro");
}

