let num = 10;
let string = "";

function print(num) {
    //loop for number of rows
  for (let i = 0; i < num; i++) {
    //loop for printing left side space
    for (j = num; j > i; j--) {
      string += " ";
    }
    //loop for printing stars
    for (let j = 0; j < 2 * i + 1; j++) {
      string += "*";
    }
    //loop for printing right side space
    for (j = num; j > i; j--) {
      string += " ";
    }
    string += "\n";
  }
  console.log(string);
}
print(num);
