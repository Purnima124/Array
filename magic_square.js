var a=[]
// var n=" "
for (i=0;i<=3;i++){
    b=[]
    for (j=0;j<=3;j++){
        var r=require("readline-sync")
        var num=r.question("Enter the number :")
        b.push(num)
    a.push(b)
    }
}
console.log("matrix is.....")
for (i=0;i<=3;i++){
    for (j=0;j<=3;j++){
        console.log(a[i][j])
        // a+="\n"
    }
}
sumd1=0
sumd2=0
for (i=0;i<=3;i++){
    for (j=0;j<=3;j++){
        if (i==j){
            sumd1=sumd1+a[i][j]
        }
        if (i+j==3-1){
            sumd2=sumd2+a[i][j]
        }
    }
}
if (sumd1!=sumd2){
    f=1

}
else{
    for (i=0;i<=3;i++){
        sumr=0
        sumc=0
        for (j=0;j<=3;j++){
            sumr=sumr+a[i][j]
            sumc=sumc+a[j][i]
        }if (sumr!=sumd1){
            f=1
        }else if (sumc!=sumd1){
            f=1
        }else{
            f=0
        }
    }
}if (f==0){
    console.log("it is magic_square")
}
else{
    console.log("it is not magic_square")
}
    