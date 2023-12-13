let n = 5;
let string = "";
function print(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      string += "* ";
    }
    console.log(string);
    string = "";
}
}
print(n);
