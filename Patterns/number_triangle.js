let num = 5;
let string = "";
let n = 0;

// function print(num) {
//   for (let i = 0; i < num; i++) {
//     for (let j = 0; j <= i; j++) {
//       n++;
//       string += n; 
//     }
//     string += "\n"
//     n=0;
//   }
//   return string
// }
// console.log(print(num));

// let string2 = ""
// n = 1
// function print2(num) {
//     for(let i = 1; i<=num; i++){
//         for(let j = 0; j<i; j++){
//             string2 +=n;
//         }
//         n++
//         string2+= "\n"
//     }
//     console.log(string2)
// }
// print2(num)

function opposite(num) {
    for(let i= 0; i<num; i++){
        for(let j = num; j>i; j--){
            n++
            string += n;
        }
        string +="\n"
        n=0
    }
    console.log(string)
    
}
opposite(num)

