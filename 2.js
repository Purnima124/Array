// Create an array named myFavouriteFruits, with 4 elements. Console 
// the third element of the array.
// var myFavouriteFruits = ["Mango", "Orange", "Banana", "Grapes"]
// console.log(myFavouriteFruits[2])
// array=[9,8,6,3,2,5,4]
// i=0
// even=0
// odd=0
// a=[]
// b=[]
// while(i<array.length){
//     k=array[i]
//     if(k%2==0){
//         a.push(k)
//         even+=k
//     i=i+1
//     }
//     else{
//         b.push(k)
//         odd+=k
//     i=i+1
//     }
// }
// console.log(a,"enen",even)
// console.log(b,"odd",odd)

var array=[1,2,3,4,5,6,7,8,9,10]
let a=[]
let b=[]
var even=0
var odd=0
for(let i of array){
    if(i%2==0){
        a.push(i)
        even+=1
    }
    else{
        b.push(i)
        odd+=1
    }
}
console.log(a,even)
console.log(b,odd)