var a=["A","B","C"]
var b=["A","b"]
var n=[]
for(let i of a){
    if(!b.includes(i)){
        n.push((i))

    }
}
console.log(n)