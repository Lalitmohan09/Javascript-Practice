const num = 6;
let string = "";

//Function to print pattern
function print(num) {
  for (let i = 1; i <= num * 2 - 1; i++) {
    let temp = i;

    if (i > num) temp = 2 * num - i;

    for (let j = 0; j < temp; j++) {
      string += "*";
    }

    string += "\n";
  }
  console.log(string);
}
print(num);
