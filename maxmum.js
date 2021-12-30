a=[-1,-2,-3,-4,-5]
var i=0
var n=a[i]
while (i<a.length){
    if (a[i]>n){
        n=a[i]
    }
    i=i+1
}
console.log(i)