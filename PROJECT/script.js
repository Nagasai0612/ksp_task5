let num1=10;
let num2=5;

///Arthimetic
console.log(num1+num2);
console.log(num1-num2);
console.log(num1%num2);
console.log(num1/num2);
console.log(num1*num2);

///Assignment
console.log(num1=num2);
console.log(num1+=num2);
console.log(num1-=num2);
console.log(num1*=num2);
console.log(num1/=num2);
console.log(num1%=num2);

///Comparison
console.log(num1==num2);
console.log(num1===num2);
console.log(num1!=num2);
console.log(num1<num2);
console.log(num1>num2);
console.log(num1<=num2);
console.log(num1>=num2);

///logical 
///AND
console.log(num1==10 && num2==5);


///OR
console.log(num1>10 || num2<10);


///NOT
console.log(!true);

//Functions
function add(number1,number2){
    console.log(number1+number2);
}
add(2,3);

function sub(number1,number2){
    console.log(number1-number2);
}
sub(10,5);

function multi(number1,number2){
    console.log(number1*number2);
}
multi(10,5);

// String methods
const name = "Nagasai";

console.log("Length: " + name.length);
console.log("Uppercase: " + name.toUpperCase());
console.log("Lowercase: " + name.toLowerCase());
console.log("Slice: " + name.slice(0, 5));
console.log("Replace: " + name.replace("sai, Naga"));
console.log("Concat: " + name.concat(" i love realme"));
console.log("Starts with: " + name.startsWith("n"));
console.log("Ends with: " + name.endsWith("a"));
console.log("Trim: " + "   sai   ".trim());
console.log("Split: " + name.split("  "));
console.log("Index of: " + name.indexOf("s"));
console.log("Includes: " + name.includes("a"));

///if
let number1=10;

 if(number1==10){
   console.log("this is true");
}

///if-else
let number2=10;

 if(number2==15){
   console.log("this is true");
}
else{
    console.log("this is flase")
}

///if-else-if
let number5=14;
 let number6=25;
 if(number5==15){
   console.log("this is true");
}
else if(number6<10){
    console.log("this is also true")
}
else{
    console.log("this is flase")
}


///loops
///for
for(i=0;i<5;i++){
    console.log("helloworld");
}

for(i=0;i<5;i++){
    console.log("i");
}
for(i=10;i>=0;i--){
    console.log("i");
}

///while
let number=0;
while(number<10){
    console.log("Iam hero");
    number--;
}



 
 