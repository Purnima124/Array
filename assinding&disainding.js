a=[1,3,5,7,8,6,13,10,12]
i=0
while(i<a.length){
    j=0
    while (j<a.length){
        if (a[i]<a[j]){
            temp=a[i]
            a[i]=a[j]
            a[j]=temp
        }
        j++
    }
    i=i+1
}
console.log(a)
b=[]
i=a.length-1
while (i>=0){
    b.push(a[i])
    i--
}
console.log(b)