/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b” */

$(document).ready(function(){

  var alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var min = parseInt(prompt('Inserisci un numero compreso fra 0 e '+ (alfabeto.length-2)));
  var max = parseInt(prompt('Inserisci un numero compreso fra '+(min + 1) +' e '+(alfabeto.length-1)));


  function filterArray(arr, min, max){
    var arrReturn = [];

    for(var i in alfabeto){
      if(i >= min && i<= max){
        arrReturn.push(arr[i]);
      }
    }

    return arrReturn;
  }


});