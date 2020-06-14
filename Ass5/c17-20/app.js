function t1(){
	var arry = [null][null];
}


function t2(){
var arry1 = [1,2,3];
var arry2 = [0,1,2];
var arry3 = [1,0,1];

var final_arry = [arry1, arry2, arry3];
	document.write(arry1+"<br>"+arry2+"<br>"+arry3);
}

function t3(){
for(var a=1; a<=10; a++){
	document.write(a+"<br>");
}
}


function t4(){
var number=prompt("Enter a number shows its table of multiplication");
var length=prompt("Enter a length of multiplication table");

for(var i = number; i<=length; i++){
	document.write(number+" x "+i+" = "+i*number+" <br>");
}
} 

function t5(){
fruits = ['apple','banna','mango','orange','stawberry'];

for(var i = 0; i<fruits.length; i++){
	document.write("Element at index "+i+" is "+fruits[i]+" <br>");
}
}

function t6(){
document.write("Counting <br>");
for(var i = 0; i<=15; i++){
	document.write(i+", ");
}


document.write("<br><br>Reverse Counting <br>");
for(var i = 15; i>=0; i--){
	document.write(i+", ");
}

document.write("<br><br>Even <br>");
for(var i = 0; i<=15; i+=2){
	document.write(i+", ");
}

document.write("<br><br>Odd <br>");
for(var i = 1; i<=15; i+=2){
	document.write(i+", ");
}

document.write("<br><br>Series <br>");
for(var i = 0; i<=20; i+=2){
	document.write(i+"k, ");
}
}

function t7(){
order=window.prompt("Welcome to ABC Bakery, What will you like to order?");

Arry = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];

var a = Arry.indexOf(order);

if(a == -1){
	document.write("We are sorry." + order + "is not available in our bakery.");
}else{
	document.write(order+" is available at index "+a+" in our bakery");	
}
}

function t8(){
var arry = [24,53,78,91,12];

document.write("Array items: "+arry+"<br>");
document.write("The Largest number is "+Math.max(...arry));
}

function t9(){
var arry = [24,53,78,91,12];

document.write("Array items: "+arry+"<br>");
document.write("The Smallest number is "+Math.min(...arry));
}

function t10(){
for(var i=1; i<=20; i++ ){
	document.write(i*5+", ");
}
}

