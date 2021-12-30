list=[[5,5,5,5,5,5],[2,2,2,2,2,2],[3,3,3,3,3,3]]
i=0
sum=0
while (i<list.length){
    j=0
    s=0
    while (j<(list[i]).length){
        s=s+(list[i][j])
        j=j+1
    }
    sum=sum+s
    i=i+1
}
console.log("sum",sum)