// 1  https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args);
    }
  };

// 2 https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

function circleCircumference(circle) {
    return circle.radius * Math.PI * 2;  
  };

//3 https://discord.com/channels/1173634356514914324/1177309471408672829/1187099239092850699
function giveMeFive(obj){
  rez = []
  for (var key in obj) {
    if (key.length === 5) rez.push(key);
    if (obj[key].length === 5) rez.push(obj[key]);
  }
  return rez;
}
