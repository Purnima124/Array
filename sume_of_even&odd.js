elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var sum_odd_numbers=0
var sum_even_numbers=0
for(var i of elements){
if(i%2 ===0){
sum_even_numbers+=i
}
else{
sum_odd_numbers+=i
}
}
console.log("even",sum_even_numbers);
console.log("odd",sum_odd_numbers);



