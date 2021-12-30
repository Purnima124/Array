o=["dade","mom","sos","pia","nan"]
a=[]
b=[]
c=[]
for i in range(len(o)):
    for j in range(len(o[i])):
        a.append(o[i][j])
        if i==0:
            a.append([i][j])
        if i==1:
            b.append(o[i][j])
        if i==2:
            c.append(o[i][i])
print(a)
print(b)
print(c)
x=a[::-1]
y=b[::-1]
z=c[::-1]
count=1
if a==x:
    print(x,count,"palindrom")
    count=count+1
if b==y:
    print(x,count,"palindrom no")
    count=count+1
    c==z
    print(z.count,"it is palindrom")

