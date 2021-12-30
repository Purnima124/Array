// var array=[1,3,5,7,9,11,13,15]
// var i=0;
// var n=[]
// var m=[]
// while(i<20){
//     if(i in includes(i)){
//         n.push(array(i))

//     }
//     else{
//         m.push(array(i))

//     }

// }
var num1=[1,3,5,7,10,12,15,17,20]
var i=0
var a=[]
var b=[]
for(var i of num1){
    if (num1.includes(i) ){
        a.push(i)
    }else{
        b.push(num1)
    // i=i+1
    }
}
console.log(a,"persent number")
console.log(b,"misinig number")
