let num = 5;
let string = "";

function print(num) {
  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < i; j++) {
      string += "*";
    }  
    string += "\n"
  }
  return string;
}
console.log(print(num));
