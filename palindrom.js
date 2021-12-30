a=["dad","mom","sos","pia","nan","pop"]
i=0
c=0
while (i<a.length-1){
    j=a[i]
    b=a.splice(j,j)
    if(b==j){
        c=c+1
    }
    else{
        c=c+1
    }
i++
}
console.log(c)

// work of splice

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi"); 
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.splice(2, 2); 
// console.log(fruits)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi"); 
console.log(fruits)