// var array=[7,10.17,14,10,21,55,23,70]
// var a=[]
// var i=0
// while(i<array.length){
//     k=array[i]
//     if (k%7==0){
//         a.push(k)
//     i=i+1
//     }
// }
// console.log(a)

var array=[7,10.17,14,10,21,55,23,70]
var a=[]
for(let i of array){
    if(i%7==0){
        a.push(i)
    }
}
console.log(a)