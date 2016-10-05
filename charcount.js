function countLetter(phrase) {

  var count = phrase.split(" ").join('');
  var result = {};
  //console.log(count);
  for (str of count) {
    if (result[str]) {
      result[str] += 1;
    }
    else {
      result[str] = 1
    }
      //if letter is new add counter to that letter's key
      //if letter has been used, add counter to its key
    }
    return result
  }

console.log(countLetter("pepperoni"))