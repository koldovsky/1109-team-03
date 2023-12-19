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
