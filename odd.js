function isEven(num) {
  if (num % 2 ===  0) return true;
  
  else return false;
}

var tenIsEven = isEven(10);
var elevenIsEven = isEven(13);

console.log(tenIsEven);
console.log(elevenIsEven);