const num = 5;
let string = "";

function print(num) {
    //Printing rows
  for (let i = 0; i < num; i++) {
    //Printing left stars
    for (let j = 0; j < i; j++) {
        string += " ";
    }
    //printing stars
    for (let j = 2 * num - i - 1; j > i; j--) {
        string += "*";
    }
    
    //Printing right stars
    for (let j = 0; j < i; j++) {
      string += " ";
    }

    string += "\n";
  }
  return string;
}
console.log(print(num));
