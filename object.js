function countLetter(phrase) {

  var count = phrase.split(" ").join('');
  var result = {};
  var i = 1;
  //console.log(count);

  for (str of count) {
    if (result[str]) {
      result[str].push(i);
    }
    else {
      result[str] = [i];
    }
    i++;
  }
  return result
}

console.log(countLetter("pizzamania"));


// {
//   l:[1]
//   i:[2, 11]
//   g:[3]
//   h:[4, 6, 14, 16]
//   t:[5, 13]
//   o:[7, 17]
//   u:[8, 18]
//   s:[9, 19]
//   e:[10, 15, 20]
//   n:[12]
// }

// .push