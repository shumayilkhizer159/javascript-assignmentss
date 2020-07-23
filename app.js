// Chapter 38 - 42

//Task 1
// function power(a,b){
//     var c = Math.pow(a, b);
//     document.write("Value Is : " + c);
// }
// var a, b;
// a = window.prompt("Enter value of A");
// b = window.prompt("Enter value of B");
// power(a,b);


//Task 2
// function find(yearr) {
//     var isTrue = Boolean(yearr % 4 === 0 && yearr % 100 !== 0) || (yearr % 400 === 0);
//     window.alert(yearr + " is Leap Year? " + isTrue);
// }
// var year = window.prompt("Enter Year");
// find(year);

//Task 3
// function calS() {
//     return (a + b + c) / 2;
// }
// function calA(a, b, c) {
//     var s = calS();
//     var area = s * (s - a) * (s - b) * (s - c);
//     window.alert("Area is : " + area);
// }
// var a = window.prompt("Enter value of A");
// var b = window.prompt("Enter value of B");
// var c = window.prompt("Enter value of C");
// calA(a, b, c);

//Task 4
// function average(s1, s2, s3) {
//     var calavg = (s1 + s2 + s3) / 3;
//     return calavg;
// }
// function percentage(su1, su2, su3) {
//     var calper = ((su1 + su2 + su3) * 100) / 300;
//     return calper;
// }

// function main() {
//     var sub1 = Number(window.prompt("Enter Subject 1 Marks"));
//     var sub2 = Number(window.prompt("Enter Subject 2 Marks"));
//     var sub3 = Number(window.prompt("Enter Subject 3 Marks"));
//     var avg = average(sub1, sub2, sub3);
//     var per = percentage(sub1, sub2, sub3);

//     window.alert("Average is : " + Math.floor(avg) + " Percentage is : " + Math.floor(per) + "%");
// }
// main();

//Task 5
// function findIndexOf(str = "", word = "") {
//     var break_sen = str.split(" "), flag = 0;
//     for (var i = 0; i < break_sen.length; i++) {
//         if (break_sen[i] == word) {
//             window.alert("your sentence is at index " + i);
//             break;
//         }
//         flag++;
//     }
//     if (flag >= break_sen.length) {
//         window.alert("Not found");
//     }
// }

// var name = window.prompt("Enter any string");
// var find = window.prompt("Enter what you find");

// findIndexOf(name, find);


//Task 6
// function deleteVowel(str = "") {
//     var sen = str.split("");
//     for (var i = 0; i < sen.length; i++) {
//         if (sen[i] === "a" || sen[i] === "e" || sen[i] === "i" || sen[i] === "o" || sen[i] === "u"){
//             sen[i] = null;
//         }
//         else{
//             document.write(sen[i] + "");
//         }

//     }
// }
// var store = "My name is hazique khatri";
// deleteVowel(store);


//Task 7
// function occurence(str = "") {
//     var splitStr = str.split(" ");

//     for (var i = 0; i < splitStr.length; i++) {
//         var flag = 0
//         var sp = splitStr[i];
//         sp = sp.split("");
//         for (var j = 0; j < sp.length; j++) {
//             if (flag < 2) {
//                 switch (sp[j]) {
//                     case "a": case "e": case "i": case "o": case "u":
//                         document.write(sp[j]);
//                     flag++;
//                         break;
//                 }
//             }
//         }
//         document.write(", ");
//     }
// }

// var str1 = "Pleases read this application and give me gratuity";
// occurence(str1);


//Task 8
// function meter(inp){
//     inp = inp * 1000;
//     document.write("Distance in meter " + inp + "m" + "<br>");
// }

// function feet(inp){
//     inp = inp * 3281;
//     document.write("Distance in feet " + inp + "feet" + "<br>");
// }

// function inches(inp){
//     inp = inp * 39370;
//     document.write("Distance in inches " + inp + "In" + "<br>");
// }

// function centi(inp){
//     inp = inp * 100000;
//     document.write("Distance in centimeter " + inp +"cm");
// }

// var input = window.prompt("Enter Distance in Km");
// meter(input);
// feet(input);
// inches(input);
// centi(input);


//Task 9
// function cal(h, s) {
//     var rate = 12.00;

//     if (h > 40) {
//         h = h - 40;
//         h *= rate;
//         s += h;
//         document.write("overtime salary is " + s + "Rs");
//     }
//     else {
//         document.write("no overtime");
//     }
// }
// var hour = Number(window.prompt("Enter Number of Hours"));
// var salary = Number(window.prompt("Enter Salary"));
// cal(hour, salary);


//Task 10
// function withdraw(money = 0) {
//     if (money > 100) {
//         var hund = parseInt(money / 100);
//         money = money - (hund * 100);
//         document.write("you will have " + hund + " hundred note ");
//         while (money > 0) {
//             if (money > 50) {
//                 var tens = money - 50;
//                 tens /= 10;
//                 money = money -(tens * 10);
//                 document.write("1 fifty note and " + tens + " ten notes.")
//                 break;
//             }
//             else if (money < 50){
//                 var unit = money / 10;
//                 money = money - (unit * 10);
//                 document.write(unit + " ten notes");
//             }
//             else {
//                 document.write("1 fifty note.");
//                 money = money - 50;
//             }
//         }
//     }
//     else {
//         if (money > 50) {
//             var tens = money - 50;
//             tens /= 10;
//             document.write("1 fifty note and " + tens + " ten notes.")
//         }
//         else {
//             document.write("1 fifty note.");
//         }
//     }

// }
// var input = Number(window.prompt("Enter Currency!"));
// withdraw(input);


// Chapter 43 - 48

//Task 1
// function popup(){
//     window.alert("Hello World!");
// }

//Task 2
// function msg(){
//     window.alert("Thanks for purchasing a phone from us..");
// }


//Task 3
// var n = ["hazique", "nabeel", "zohaib", "yaseen", "Ali"];
// var h = ["Index", "Name", "Class"];
// var c = [7, 10, 8, 5, 11];
// var table = document.getElementById("t");
// var head = document.createElement("th");
// var row = document.createElement("tr");
// var td = document.createElement("td");
// var bt;
// for (var i = 0; i < 3; i++) {
//   var text = document.createTextNode(h[i] + " ");
//   head.appendChild(text);
//   table.appendChild(head);
// }
// for (var i = 0; i < 5; i++) {
//   var te = document.createTextNode("\xa0\xa0\xa0\xa0" + n[i])
//   var num = document.createTextNode(i);
//   var btn = document.createElement("button");
//   bt = btn;
//   btn.appendChild(document.createTextNode("DELETE" + i));
//   var cla = document.createTextNode("\xa0\xa0\xa0\xa0\xa0\xa0" + c[i]);
//   var sp = document.createElement("br");
//   td.append(num);
//   td.appendChild(te);
//   td.appendChild(cla);
//   td.appendChild(btn);
//   td.appendChild(sp)
//   row.appendChild(td);
//   table.appendChild(row);
//   btn.onclick = function R(){for(var i =0;i<5;i++){
//       table.removeChild(row);   
//   }}
// }

//Task 4
//this task is in Html file..


//Task 5
// var count = document.getElementById("countVal");
// i =0
// function inc(){
//   i++;
//   count.value =i;
// }
// function dec(){
//   i--;
//   count.value = i;
// }

// Chapter 49 - 52

//Task 1
// function foo(){
// var fname = document.getElementById("fname");
// var lname = document.getElementById("lname");
// var d1 = document.getElementById("df");
// var d2 = document.getElementById("de");
// d1.innerHTML = "Your Name Is : " + fname.value + " " + lname.value;
// var email = document.getElementById("e");
// d2.innerHTML = "Your Email Is : " + email.value;
// }


//Task 2
// function read() {
//     var string = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor dicta consectetur sint earum perferendis labore dignissimos doloribus cumque voluptates distinctio maiores dolores mollitia minima, quis soluta, harum quae hicrem?>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor dicta consectetur sint earum perferendis laboredignissimos doloribus cumque voluptates distinctio maiores dolores mollitia minima, quis soluta, harum quae hicrem?";
//     document.getElementById("para").innerHTML = string;
// }


//Task 3
// var fname = document.getElementById("fname");
// var lname = document.getElementById("lname");
// var d1 = document.getElementById("df");
// var email = document.getElementById("e");
// var d2 = document.getElementById("de");
// function foo() {
//     d1.innerHTML = "Your Name Is : " + fname.value + " " + lname.value;
//     d2.innerHTML = "Your Email Is : " + email.value;
//     var btn1 = document.getElementById("btn1").style.display = "inline";
//     var btn2 = document.getElementById("btn2").style.display = "inline";
//     var btn3 = document.getElementById("btn3").style.display = "inline";
//     var btn4 = document.getElementById("btn4").style.display = "inline";

// }
// var bt = document.getElementById("bt");
// var inp1 = document.getElementById("inp2");
// var inp = document.getElementById("inp");
// function edit1() {
//     inp.style.display = "inline";
//     bt.style.display = "inline";
//     fname.value = inp.value;
// }
// function edit2() {
//     inp1.style.display = "inline";
//     var bt = document.getElementById("bt1");
//     bt.style.display = "inline";
//     email.value = inp1.value;
// }
// function fun() {
//     d1.innerHTML = "Your Name Is  : " + inp.value;
// }
// function fun1() {
//     d2.innerHTML = "Your email Is  : " + inp1.value;
// }
// function del() {
//     d1.style.display = "none";
// }
// function del2() {
//     d2.style.display = "none";
// }


// Chapter 53 - 58
// Task
// function openModal() {
//     document.getElementById("myModal").style.display = "block";
//   }

//   function closeModal() {
//     document.getElementById("myModal").style.display = "none";
//   }
  
//   var slideIndex = 1;
//   showSlides(slideIndex);
  

//   function plusSlides(n) {
//     showSlides(slideIndex += n);
//   }
  

//   function currentSlide(n) {
//     showSlides(slideIndex = n);
//   }
  
//   function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("demo");
//     var captionText = document.getElementById("caption");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//     captionText.innerHTML = dots[slideIndex-1].alt;
//   }


// Chapter 58 - 67

//Task 1

//part i
// var main = document.getElementById("main-content");

//part ii
// for(var i=0;i<main.childNodes.length;i++){
//     console.log(main.childNodes[i]);
// }

//part iii
// var cla = document.getElementsByClassName("render");
// document.write("<b>Inner Html </b><br>")
// for(var i =0;i<cla.length;i++){
//     document.write(cla[i].innerHTML + "<br>"); 
// }

//part iv
// var fname = document.getElementById("first-name");
// fname.setAttribute("value" ,"Hazique");

//part v
// var lname = document.getElementById("last-name");
// var email = document.getElementById("email");
// lname.setAttribute("value" ,"Khatri");
// email.setAttribute("value" ,"haziqiqbal2101@gmail.com");


//Task 2

//part i
// var p1 = document.getElementById("form-content");
// console.log(p1.nodeType);

//part ii
// var p2 = document.getElementById("lastName");
// console.log(p2.nodeType);
// for(var i =0;i<p2.childNodes.length;i++){
//     console.log(p2.childNodes[i]);
// }

//part iii
// var p3 = document.getElementById("lastName");
// var s =p3.childNodes = "Last Name: Office";
// p3.innerHTML =s;
// console.log(p3.childNodes[0]);

//part iv
// var p4 = document.getElementById("main-content");
// console.log(p4.firstChild);
// console.log(p4.lastChild);

//part v
// var p5 = document.getElementById("lastName");
// console.log(p5.nextSibling);
// console.log(p5.previousSibling);

//part vi
// var p6 = document.getElementById("email");
// console.log(p6.parentNode);
// console.log(p6.nodeType);
