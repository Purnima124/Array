// var a=[25,11,23,44]
// var n=[]
// for(var i of a){
//     n.push(-i)
// }
// console.log(n)

// 2

// var a=[25,11,23,44]
// var n=[]
// for(var i of a){
//     n.push(i+i)
// }
// console.log(n)
// 3

const r=require("readline-sync")
var numbers=r.questionInt("Enter number")
var i=0;
var list=[]
while (i<=numbers){
    if(numbers==5){
        list.push(i)
    i=i+1
    }
}
console.log(list)