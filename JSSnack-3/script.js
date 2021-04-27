/* Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi)prendendo alternativamente gli elementi da uno e dall'altro es. [a,b,c],[1,2,3] -->[a,1,b,2,c,3]. */


$(document).ready(function(){
  var arrLetters = [
    "a","b","c"
  ];
  var arrNumbers = [
    1,2,3
  ];
  var arrFusion = [];

  for(var i = 0; i < (arrLetters.length && arrNumbers.length); i++){
    var itemText = arrLetters[i];
    var item = arrNumbers[i]; 

    console.log(itemText);
    console.log(item);

    arrFusion.push(itemText);
    arrFusion.push(item);
  }
  console.log(arrFusion)
});