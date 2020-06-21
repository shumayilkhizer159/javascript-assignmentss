// chap 21-25 string method //
//task 1
/*
var fname=prompt("enter your first name")
var lname=prompt("enter your last name")
var fullname=fname+" "+lname;
document.write("Good Day "+fullname)
*/
//task 2
/*
var info=prompt("enter your favorite phone model")
var length=info.length
document.write("My favorite phone is: "+info+"<br>")
document.write("length of string : "+length)
*/
//task 3
/*
var str='Pakistan'

for(var i=0;i<str.length;i++){
    if(str[i]==='n')
    {   document.write("String: "+str)
        document.write("Index of 'n': "+i)
        break;
    }
}
*/
//task 4
/*
var str="Hello world"

for(var i=str.length;i>0;i--){
    if(str[i]==='l')
    {   document.write("String: "+str+"<br>")
        document.write("Index of 'l': "+i)
        break;
    }

}
*/
//task 5
/*
var str="Pakistani"
document.write("string: "+str+"<br>")
document.write("character at index 3 :"+str[3])
*/
//task 6
                   /*.................to doooooooooo.........................
var fname=prompt("enter your first name ")
var lname=prompt("enter your last name")
var fullnam=
*.........................................*/
//task 7
/*
var city="hyderabad"
var a=city.slice(5)
document.write("city :"+city+"<br>")
var city2="islam"+a
document.write("After replacement: "+city2)
*/
//task 8
/*
var message = "Ali and Sami are best friends. They play cricket and football together.";
var msg=message.replace("and","&")
document.write("before: "+message+"<br>")
document.write("After: "+msg)
*/
//task 9
/*
var str="472"
var num=Number(str)
document.write("value: "+str+"<br>")
document.write("Type: "+ typeof str+"<br>")
document.write("value: "+num+"<br>")
document.write("Type: "+ typeof num)
*/
//task 10
/*
var str=prompt("enter  your name ")
var convert=str.toLocaleUpperCase();
document.write("User input:"+str+"<br>")
document.write("Upper case: "+convert)
*/
//task 11
/*
var str="javascript"
var fstr=str.slice(0,1)
fstr=fstr.toUpperCase()
var lstr=str.slice(1)
document.write("User input: "+str+"<br>")
document.write("title case: "+fstr+lstr)
*/
//task 12
/*
var num = 35.36 ;
document.write("Number:" +num+"<br>")
var a=num*100;
var str=a.toString()
document.write("result :"+str)
*/
//task 13
/*..................to doooooo..........................
var input=prompt("enter your name")
if(input===33 || input===44|| input===46 || input===64){
    alert("Please enter a valid user name")


}
..................................................*/
//task 14
/*......................check it............................
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var search=prompt("enter what you want")
var search=search.toLowerCase();
for(var i=0;i<A.length;i++){
    if(A[i]==search){
        document.write(search+" is avalible at index "+i+"<br>")
        break
    }
    else{
        document.write("your item is not found")
        break;
    }
}
..............................................*/
//task 15
/*......................to dooo.......................
var password=prompt("enter your password")
for(var i=0;i<password.length;i++){
    if(password[0]===String||password[)
}

......................................................*/
//task 16
// var university = "University of Karachi";

// for(var i=0;i<university.length;i++){
//     document.write(university[i]+"<br>")
// }
//task 17
// var input=prompt("enter any string");

// var lastchar=input[input.length -1];

// document.write(lastchar);

// task 17
/*
var input=prompt("enter your string")
document.write("User input: "+input+"<br>")
var lastchar=input[input.length-1]
document.write("last character of input: "+lastchar)
*/
//task 18
/*
var str1= "The quick brown fox jumps over the lazy dog"
var str=str1.toLowerCase()
var count=0;
for(var i=0;i<str.length;i++){
    if(str.slice(i,i+3)==="the"){
        count=count+1;
    }
}
document.write("Text: "+str1+"<br>")
document.write("There are "+count+" occurrence(s) of the word 'the'")
*/
//chap26-30 math methods
//task 1
/*
var num=Number(prompt("enter any positive number"))
document.write("number: "+num+"<br>")
document.write("Round off value: "+Math.round(num)+"<br>")
document.write("floor value: "+Math.floor(num)+"<br>")
document.write("ceil value: "+Math.ceil(num))
*/
//task 2
/*
var num=Number(prompt("enter any negative number"))
document.write("number: "+num+"<br>")
document.write("Round off value: "+Math.round(num)+"<br>")
document.write("floor value: "+Math.floor(num)+"<br>")
document.write("ceil value: "+Math.ceil(num))
*/
//task 3
/*
var num=Number(prompt("enter any +/- number"))
document.write("The absolute value of "+num+" is "+Math.abs(num))
*/
//task 4
/*
var num=Math.floor(Math.random()*6)+1
document.write("Random dice value: "+num)
*/
//task 5
/*
var cointoss=Math.floor(Math.random()*2)+1
document.write(cointoss+"<br>")
if(cointoss===1){
    document.write("random coin value: tails")
}
else{
    document.write("randon coin value: heads")
}
*/
//task 6
/*
var num=Math.floor(Math.random()*100)+1;
document.write("The random number between 1 to 100: "+num)
*/
//task 7
/*
var input=prompt("enter your weight")
var weight=parseInt(input)
document.write("The weight of user is "+weight+" Kilograms")
*/
//task 8
/*
var num=Math.floor(Math.random()*10)+1
var guessnum=Number(prompt("enter a number between 1 to 10"))
if(guessnum===num){
    alert("congratulations! your guess is correct")
}
else{
    alert("Try again")
}
*/
// chap 31-34 Data method
//task 1
/*
var a=new Date()
document.write(a)
document.write("<br>")

//task 2
document.write("Current month: "+a.getMonth())
document.write("<br>")

//task 3
var b=a.getDay()
var c=b.slice(0,3)
document.write("Today is: "+a.getDay())
*/
//task 4
/*
var a=new Date()
b=a.getDay();
if(b===0||b===6){
     document.write("Its fun day")
}
else{
    document.write("its work day")
}
//task 5

var a=new Date();
var b=a.getDate()
if(b===16||b>16){
    document.write("Last days of the month")
}
else{
    document.write("First 15 days of the month")
}
*/
//task 6
/*
var a=new Date()
var b=a.getMilliseconds()
var c=a.getMinutes()
document.write("Current Date: "+a)
document.write("Elapsed miliseconds sincee jan 1, 1970: "+b)
document.write("Elapsed miliseconds sincee jan 1, 1970: "+c)
*/
//task 7
/*
var time=Number(prompt("enter the time"))
if(time>=1200|| time==2359){
    document.write("Its pm")
}
else{
    document.write("its am")
}
*/
//task 13
/*
var age=Number(prompt("enter your age"))
var a= new Date()
var b=a.getFullYear()
var c=b-age;
document.write("your birth year is: "+c)
*/
//task 14
/*
var name=prompt("enter your name")
var a=new Date()
var b=a.getMonth()
var noofunits=450;
var chargeunit=18;
document.write("Custumer name: "+name)
document.write("<br>")
document.write("Month: "+b)
document.write("<br>")
document.write("Number of Units:"+noofunits)
document.write("<br>")
document.write("Charge per unit:"+chargeunit)
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("Net Amount payable(within Due Date: "+noofunits*chargeunit)
document.write("<br>")

document.write("Late paytment surchargers: "+340)
document.write("<br>")

document.write("Gross amount payable(after due date):"+noofunits*chargeunit+340)

*/



// chap35-38 functions
//task 1
/*
function newdate(){
    var a=new Date();
    return a;

}
var b=newdate()
document.write(b)
*/
//task 2
/*
function fullname(a,b){
      var fullname=a+" "+b
      return fullname
}
var a=prompt("enter your first name")
var b=prompt("enter your last name")
var Fname=fullname(a,b)
document.write(Fname)
*/
//task 3
/*
function add(a,b){
    var sum=a+b
    return sum
}
var a=Number(prompt("enter your first name"))
var b=Number(prompt("enter your last name"))
var add=add(a,b)
document.write(add)
*/
//task 4
/*
function cal(a,b,c){
    if(c==="+"){
        return a+b
    }
    else if(c==="-"){
        return a-b
    }
    else if(c==="*"){
        return a*b
    }
    else if(c==="/"){
        return a/b
    }
    else if(c==="%"){
        return a%b;
    }
    else{
        return "incorrect operator"
    }
    
}
var x=Number(prompt("enter your 1st number"))
var y=Number(prompt("enter your 2nd number"))
var z=prompt("enter your operator")
var operation=cal(x,y,z)
document.write("your result is: "+operation)
*/
//task number 5



// var number=prompt("enter any number?");


// function square(number){
//     return number*number
// }



// document.write("squared number is"+ square(number));


//TASK NUMBER 6


// function factorial(n){
//     return (n!=1) ? n*factorial(n-1) :1;
// }

// alert(factorial(5));


// task number 7

// var startnum=prompt("enter start nummber");

// var endnum=prompt("enter ending number");


// for(i=startnum;i<=endnum;i++){
//     document.write(i+"<br>")
// }

//task number 8

// function calculatesquare(number){
//     return number*number
// }

// var base=Number(prompt("enter base"));

// var perpen=Number(prompt("enter perpendiular"));

 
// function calculatehyp(base,perpen)
// {

//    var hyp=calculatesquare(base)+calculatesquare(perpen);
//    hyp=calculatesquare(hyp);
//    document.write(hyp);
    

// }

// calculatehyp(base,perpen);
//task 14
/*
function calccircumference(raduis){
       return 2*3.14*raduis
}
var r=Number(prompt("enter the radius"))
var circumference=calccircumference(r)
document.write("the circumference of a circle is: "+circumference)
document.write("<br>")

function calcArea(radius2){
    return 3.14*radius2*radius2;
}
var r2=Number(prompt("enter the radius"))
document.write("the area of a circle is :"+calcArea(r2))
*/
//task 9
/*
function palindrome(word){
    var check="";
    for(var i=word.length-1;i>=0;i--){
        check+=word[i]
    }
    if (word===check){
        return "its is a palindrom word"
    }
    else{
        return "it is not a palindrom"
    }
}
var word=prompt("enter the word")
document.write(palindrome(word))
*/
//task 9
/*
function Aofrectangle(w,h){
      var A=w*h;
      return A;
}
var width=Number(prompt("enter width"))
var height=Number(prompt("enter height"))
document.write("the area of rectangle is: "+Aofrectangle(width,height))
*/
