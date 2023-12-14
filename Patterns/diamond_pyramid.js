const num = 5;
let string = "";

function pyramid(num) {
  for (let i = 1; i <= num; i++) {
    for (let j = i; j < num; j++) {
      string += " ";
    }

    for (let j = 0; j < 2 * i - 1; j++) {
      string += "*";
    }

    for (let j = i; j < num; j++) {
      string += " ";
    }
    string += "\n";
  }
  return string
}
function reversePyramid(num) {
    for (let i = 0; i < num; i++) {
    for (let j = 0; j < i; j++) {
      string += " ";
    }

    for (let j = i; j < num*2-i-1; j++) {
      string += "*";
    }

    for (let j = 0; j < i; j++) {
      string += " ";
    }
    string += "\n";
  }
  console.log(string)
}

pyramid(num)

reversePyramid(num)