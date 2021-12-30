var array=[1,2,3,4,5,6,7,8,9,10,11]
var even=0;
var odd=0;
for(var i of array){
    if(i%2===0){
        even+=1
    }else{
        odd+=1
    }
}
console.log(even)
console.log(odd)