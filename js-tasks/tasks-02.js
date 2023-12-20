// 1 https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
const stringToArray = (str) => str.split(" ");

// 2 https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  const newDNA = dna.split("");
  const newArray = [];
  for (let item of newDNA) {
    if (item === "T") {
      newArray.push("U");
    } else {
      newArray.push(item);
    }
  }
  const editedArray = newArray.join("");
  return editedArray;
}
// or
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

//3 https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function(list){
  for (var i=1;i<list.length;i++){
    if (list[0]>list[i]) list[0]=list[i];      
    }
    return list[0];
}

var max = function(list){
    for (var i=1;i<list.length;i++){
    if (list[0]<list[i]) list[0]=list[i];      
    }
    return list[0];
}
//4 https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  if (toReturn === 'value'){
    return Math.min(...arr);
  }
  if (toReturn === 'index'){
    return arr.indexOf(Math.min(...arr));
  }
}
//5 https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
     var wolfIndex = queue.indexOf("wolf");
     if (wolfIndex === queue.length - 1) {
         return "Pls go away and stop eating my sheep";
     } else {
     var sheepIndex = queue.length - 1 - wolfIndex;
     return "Oi! Sheep number " + sheepIndex + "! You are about to be eaten by a wolf!";
  }
}
//6 https://www.codewars.com/kata/beginner-lost-without-a-map
function doubleArrayValues(arr) {
  return arr.map(x => x * 2);
}
//7 https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript 
function firstNonConsecutive(arr) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== 1) {
      return arr[i];
    }
  }
  return null;
}
