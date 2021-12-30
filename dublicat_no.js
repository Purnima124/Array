var n=[19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
var i=0
var a=[]
while (i<n.length){
    l=n[i]
    if (! a.includes(i)){
        a.push(l) 
    }
    i=i+1
}
console.log(n)
