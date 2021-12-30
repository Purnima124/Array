// Create an array named “myFavouriteGames” and store 
// the elements of different games in it

// var myFavouriteGames=["luddo","kricat","baideminten","bascateball"]
// console.log(myFavouriteGames)

var array=[1,2,3,4,5,6,7,8]
var i=0
var even=0
var odd=0
var n=[]
var n2=[]
while(i<array.length){
    if(i%2==0){
        even+=1
        n.push(i)
    }else{
        odd+=1
        n2.push(i)

    }
}
console.log(even)
console.log(odd)