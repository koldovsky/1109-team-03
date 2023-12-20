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
