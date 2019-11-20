// innerHTML
document.getElementById("inner_HTML").innerHTML = 5 + 6;


document.getElementById("demo_1").innerHTML = "My First Practece JS";
function myFunction_2() {
	document.getElementById("demo_2").innerHTML = "Paragraph Change Practece JS";

}
// p-3
var x, y, z;
 x = 5;
 y = 7;
 z = x + y;

document.getElementById("demo_3").innerHTML = "This value of z is "+z+"." ;

var a, b, c;
a = 8;
b = 7;
c = a * b;
document.getElementById("demo_3_1").innerHTML = c;

var a, b, c;
a = 20; b = 12; c = a - b;
document.getElementById("demo_3_2").innerHTML = c;

function myFunction_3() {
	document.getElementById("demo_3_3").innerHTML = "Hey guys";
	document.getElementById("demo_3_4").innerHTML = "How are You";
	
}
// P = 4
// JS Syntax
document.getElementById("demo_4").innerHTML = 10.50;

document.getElementById('demo_4_1').innerHTML = "This is double <b>quote</b> in js";
document.getElementById('demo_4_2').innerHTML = 'This is single <b>quote</b> in js';

document.getElementById('demo_4_3').innerHTML = 'This is a Strings, js use single quote';
document.getElementById('demo_4_4').innerHTML = "This is a Strings, js use double quote";

var x;
x=7;
document.getElementById('demo_4_5').innerHTML = x;

document.getElementById('demo_4_6').innerHTML = (5+7)*5;
//start
var x = 3;
var y = 7;
var z = x+y;

var a = 4;
var b = z*a;

var d = b/a;

var e = 48;
var f = e%d;

document.getElementById('demo_4_7').innerHTML = z;
document.getElementById('demo_4_8').innerHTML = b;
document.getElementById('demo_4_9').innerHTML = d;
document.getElementById('demo_4_10').innerHTML = f;
// end

var x, y;
x = 8;
y = 7;
document.getElementById('demo_4_11').innerHTML = x + y;

// JavaScript and Camel Case
var hyPhens = "first-name, last-name, master-card, inter-city.";
document.getElementById('demo_4_12').innerHTML =hyPhens;

var underScore = "first_name, last_name, master_card, inter_city.";
document.getElementById('demo_4_13').innerHTML =underScore;

var upperCamelCase = "Ex: FirstName, LastName, MasterCard, InterCity.";
document.getElementById('demo_4_14').innerHTML = upperCamelCase;

var lowerCamelCase = "firstName, lastName, masterCard, interCity.";
document.getElementById('demo_4_15').innerHTML = lowerCamelCase;

// start-p-5
//Variables
var x = 9;
var y = 7;

var z = x+y;
document.getElementById("demo_5").innerHTML =
"The value of z is: " + z ;

// Much Like Algebra
var price1 = 8;
var price2 = 6;
var total = price1 + price2;
document.getElementById('demo_5_1').innerHTML = "The total is: " + total;

// Data Types
var pi = 3.14;
var person = "Atiqur Rahman";
var answer= 'Yes I am!';
document.getElementById('demo_5_2').innerHTML = 
pi + "<br/>" + person + "<br/>" + answer;

// One Statement, Many Variables
var naMe = "Atiqur Rahman", carName = "volvo", price = 200;
document.getElementById('demo_5_3').innerHTML =
naMe + "<br>" + carName + "<br>"+ price;

// span multiple lines:
var Name = "Masum Billah",
Carname = "volvo",
fixPrice = 250;

document.getElementById('demo_5_4').innerHTML =
Name + "<br>"+ Carname + "<br>"+ fixPrice;

// Arithmetic
var x = 5 + 5 + 4;
document.getElementById('demo_5_5').innerHTML = x;

var y = "Atiq" + " " + "Masum";
document.getElementById('demo_5_6').innerHTML = y;

var x = "5" + 2 + 3;
document.getElementById('demo_5_7').innerHTML = x;

var z = 2 + 3 + "5";
document.getElementById('demo_5_8').innerHTML = z;

// JavaScript Operators
//The += Operator
var x = 20;
x += 5;  // x = x + 5
document.getElementById('demo_6').innerHTML = x;

var txt1 = "I want to learn ";
txt1 += "a web development";
document.getElementById('demo_6_1').innerHTML = txt1;
//number and a string
var x = 8+6;
var y = "8" + 5;
var z = "Hello " + 5;

document.getElementById('demo_6_2').innerHTML = 
x + "<br>" + y + "<br>" + z;