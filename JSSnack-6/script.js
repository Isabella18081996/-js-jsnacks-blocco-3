/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

$(document).ready(function(){

  var arrayUno = [
    2,14,58,69,47,3,1,25,
  ];
  var arrayDue = [
    24,54,78,19,97,9,4,21,69,23,10,14,
  ];

  for(var i = 0; i <= (arrayDue.length - arrayUno.length + 2);i++){
    arrayUno.push(generatorRandomNumber(1,100));
  }

  console.log(arrayUno);
  console.log(arrayDue);

  //funzioni
  function generatorRandomNumber (min,max){
    return Math.floor(Math.random()*(max - min + 1) + min)
  }



});