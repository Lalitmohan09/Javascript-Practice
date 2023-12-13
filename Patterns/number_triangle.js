let num = 5;
let string = "";
let n = 0;
/*
Printing pattern:-
1
12
123
1234
12345
*/
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

/*
Printing Patterns:-
1
22
333
4444
55555
*/
// let string2 = ""
// function print2(num) {
//     n = 1
//     for(let i = 1; i<=num; i++){
//         for(let j = 0; j<i; j++){
//             string2 +=n;
//         }
//         n++
//         string2+= "\n"
//     }
//     console.log(string2)
// }
// print2(num);

/*
Printing pattern:-
12345
1234
123
12
1
*/
function opposite(num) {
    n=0
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

