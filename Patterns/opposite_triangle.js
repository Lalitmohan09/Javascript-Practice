let num = 5;
let string = "";
function oppositeTriangle(num) {
  for (let i = 0; i < num; i++) {
    for (let j = num; j > i; j--) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}
oppositeTriangle(num);
