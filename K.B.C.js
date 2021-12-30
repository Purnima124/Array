question_arrays = [
    "how many continents are there?",              
    "What is the capital of India?",            
    "NG mei kaun se course padhaya jaata hai?"  
    ]
options_arrays = [
    // #pehle question ke liye options
    ["Four", "Nine", "Seven", "Eight"],
    // #second question ke liye options
    ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
    // #third question ke liye options
    ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
]
// # har ek question ke liye, uski solution key (yeh index nahi hai)
solution_arrays = [3, 4, 1]

answer_array=[
    ["(1)Four","(3)seven"],
    ["(4)Delhi","(2)Bhupal"],
    ["(4)Agriculture","(1)software Engineering"]
]
console.log("WELCOME TO KON BANEGA KADODPATI")
var s=0
var count=0
for(i=0;i<question_arrays.length;i++){
    console.log(question_arrays[i])
    b=i
    for (var a=0;a<options_arrays[i].length;a++){
        var k=options_arrays[b][a]
        console.log(a+1,k)
    }
    const r=require("readline-sync")
    var num1=r.question("Do you want 5050 life line : ")
    if (num1=="yes"){
        console.log("50 50 lifeline")
        if (count< 1){
            console.log(answer_array[b])
            const r=require("readline-sync")
            var num2=r.questionInt("enter your answer : ")
            if (num2==solution_arrays[i]){
           
                s+=10000
                console.log("congratulation your answer correct")
                console.log("you win 😀😀🤗Rs/",s)
            }else{
                console.log("your answer is rong")
                console.log("you can paly again")
                console.log("you win 😀Rs/",s)
                break
            
            }count+=1
            
        }
        else{
            console.log("you already use lifeline")
            const r=require("readline-sync")
            var m=r.questionInt("enter your answer : ")
            if (m==solution_arrays[i]){
                console.log("congres right answer")
                s+=10000
                console.log("you win 😀😀😀 Rs/",s)
            }
            else{
                console.log("No chance😩😩😩😩")
                console.log("your answer is wrong")
                console.log("you win😀😀😀 Rs/",s)
                break
            
            }
            
        }
    }
    else{
        // pass
        const r=require("readline-sync")
        var k=r.questionInt("enter you won answer : ")
        if (k==solution_arrays[i]){
            console.log("congres right answer")
            s+=10000
            console.log("you are win 😀😀😀Rs/",s)
        }else{
            console.log("No chance")
            console.log("your answer is wrong😩😩😩")
            console.log("you are win Rs/",s)
            break
        }
    }
    i=i+1
    
}     
console.log("____congrescutionl you are big part of!___KON BANEGA KADODPATI")
console.log("you are win Rs/",s)
console.log("Thank you are part of this")
