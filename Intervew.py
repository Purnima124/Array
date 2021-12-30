# num=int(input("no of terms :"))
# s=int(input("enter a no :"))
# i=1
# sum=0
# n=2
# while i<num:
#     b=(10//s)
#     # sum=b
#     i=i+1
#     print(b)

a=int(input("Enter the number :"))
b=str(a)
l=len(b)
t=l-1
i=0
while i<len(b):
    code=int(b[i])
    num=(code)*10**t
    print(num,end=" ")
    if i!=len(b)-1:
        print(end=" ")
    i=i+1
    t=t-1


# 2

# s=int(input("no of terms :"))
# w=s%10000000
# x=w%1000000
# y=x%100000
# z=y%10000
# a=z%1000
# b=a%100
# c=b%10
# d=c%10
# print(s-w,"+",w-x,"+",x-y,"+",y-z,"+",z-a,"+",a-b,"+",b-c,"+",c-d,"+",d)

     # 3
# s=[12,42,70304,8756,22]
# a=int(input("Enter the number :"))
# b=str(a)
# l=len(b)
# t=l-1
# i=0
# while i<len(b):
#     code=int(b[i])
#     num=(code)*10**t
#     print(num,end=" ")
#     if i!=len(b)-1:
#         print("+",end=" ")
#     i=i+1
#     t=t-1












# start=s
# sum=0start=s
# sum=0
# for i in range(0,n):
#     print(start,end=" ")
# #  sum+=start
# s=s+n
# start=(start*10)+s
# for i in range(0,n):
#     print(start,end=" ")
# #  sum+=start
# s=s+n
# start=(start*10)+s