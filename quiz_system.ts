import inquirer from "inquirer";

console.log("welcome to quiz game:");
console.log("you are required to maximum 3 point for the window:")
 
let score = 0;

//Q1
let question_1 = await inquirer.prompt([
    {
        name:"one",
        type:"list",
        message:"Q1.typescript is a superset of?",
        choices:["python","java","javascript","c++"]
        
    }
])
if(question_1.one == "javascript"){
    console.log("your answer is correct")
    ++score
}else{
    console.log("incorrect answer")
}
//Q2
let question_2 = await inquirer.prompt([
    {
        name:"two",
        type:"list",
        message:"Q2.what is the correct way to check if two values are not equal to Typescript?",
        choices:["a == b","a === b","a = b","a !== b"]
        
    }
])
if(question_2.two == "a !== b"){
    console.log("your answer is correct")
    ++score
}else{
    console.log("incorrect answer")
}
//Q3
let question_3 = await inquirer.prompt([
    {
        name:"three",
        type:"list",
        message:"Q3.Typescript , which is commonly used to terminate a statement?",
        choices:[".",",",":",";"]
        
    }
])
if(question_3.three == ";"){
    console.log("your answer is correct")
    ++score
}else{
    console.log("incorrect answer")
}
//Q4
let question_4 = await inquirer.prompt([
    {
        name:"four",
        type:"list",
        message:"Q4.which is commonly used for string concentration in Typescript?",
        choices:["+","-","*","/"]
        
    }
])
if(question_4.four == "+"){
    console.log("your answer is correct")
    ++score
}else{
    console.log("incorrect answer")
}
//Q5
let question_5 = await inquirer.prompt([
    {
        name:"five",
        type:"list",
        message:"Q5.what is Extention for Typscript files?",
        choices:["abc.js","abc.ts","abc.tsc","none of them"]
        
    }
])
if(question_5.five == "abc.ts"){
    console.log("your answer is correct")
    ++score
}else{
    console.log("incorrect answer")
}
//Q6
let question_6 = await inquirer.prompt([
    {
        name:"six",
        type:"list",
        message:"Q5.which of the following characters is commonly allowed in variable names in Typscript?",
        choices:["$","@","&","#"]
        
    }
])
if(question_6.six == "$"){
    console.log("your answer is correct")
    ++score
}else{
    console.log("incorrect answer")
}

//output condition
if(score>= 3){
    console.log("congratulations !")
    console.log(`your score:${score}`)
}else{
    console.log("you loss!try next time")
    console.log(`your score:${score}`)
}
