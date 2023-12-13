let num = 5;
let string = "";

function print(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      string += "*";
      console.log(string);
      if(string.length===num) return
    }  
   
  }
}
print(num);
