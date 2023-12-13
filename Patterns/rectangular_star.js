let n = 5;
let string = "";
function print(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      string += "* ";
    }
    string += "\n";
}
  return string;
}
console.log(print(n));
