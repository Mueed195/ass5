function t1(){
var city=prompt("Enter city Name");

if(city=='karachi'){
	document.write("Welcome to the city of Lights");
}else{
	document.write("Please Enter valid City Name");
}
}

function t2(){
var gen=prompt("Enter your Gender");
if(gen=='male'){
	document.write("Good Morning Sir");
}else{
	document.write("Good Morning Ma'am");
}
}

function t3(){
var tr=prompt("Enter trafic color");
if(tr=='red'){
	document.write("Must Stop");
}if(tr=='yellow'){
	document.write("Ready to move");
}if(tr=='green'){
	document.write("Move now");
}else{
	document.write("Please enter valid color");
}
}

function t4(){
	var fuel=prompt("Enter the Remaining Fuel in car");
	if(fuel<=0.25){
	document.write(" “Please refill the fuel in your car” ");
}else{
	document.write("ur fuel is filled");
}
}

function t5a(){
	 var a = 4;
     if (++a === 5){
     alert("given condition for variable a is true");
}
}

function t5b(){
	var b = 82;
    if (b++ === 83){
    alert("given condition for variable b is true");
}
}

function t5c(){
	 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
}

function t5d(){
	var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

}

function t5e(){
	 if (true){
     alert("True");
}
    if (false){
    alert("False");
}
}

function t5f(){
	  if("car" < "cat"){
alert("car is smaller than cat");
}

}

function t6(){
	var tt=300;
	var o1= prompt("Obtained Marks of 1st Subject");
	var ob1=parseInt(o1);
	var o2= prompt("Obtained Marks of 2nd Subject");
	var ob2=parseInt(o2);
	var o3= prompt("Obtained Marks of 3rd Subject");
	var ob3=parseInt(o3);
	var ob=ob1+ob2+ob3;
	var per= (ob/tt)*100;
	//var div= (ob/tt)*100;
	var grade;
	var rem;
	if(per>=80){
		grade="A-One";
		rem="Excellent";
		
	}if(per==70 || per<80){
		grade="A";
		rem="Good";
		
	}if(per==60 || per<70){
		grade="B";
		rem="You need to improve";
		
	}if(per<60){
		grade="Fail";
		rem="Sorry";
	}
		
document.write("<h1>Marks Sheet</h1>" + "<br>" + "<br>" + "Total Marks: " + tt + "<br>" + "Marks Obtained: " + ob + "<br>" + "Percentage: " + per + "<br>" +"Grade: " + grade + "<br>" + "Remarks: " + rem);
	
}

function t7(){
	var num= 7;
	var s1= prompt("Guess the number between 1 to 10");
	if(s1==num){
		document.write("Correct!");
		
	}if(--num==s1){
		document.write("You are close enough");
		
	}else{
		document.write("Try again");
	}
}

function t8(){
	var mod= prompt("Input the number");
	if(mod%3==0){
		document.write("Its divisible by 3");
	}else{
		document.write("Its not divisible by 3");
	}
}

function t9(){
	var mod= prompt("Input the number");
	if(mod%2==0){
		document.write("Even Number");
	}else{
		document.write("Odd Number");
	}
}

function t10(){
	var a= prompt("Write Temperature");
	if(a==40){
  		document.write("It is too hot outside.");
	}if(a==30){
		document.write("The Weather today is Normal.");
	}if(a==20){
		document.write("Today’s Weather is cool.");
	}if(a==10){
		document.write("OMG! Today’s weather is so Cool.");
	}
}

function t11(){
	var num1= prompt("Write 1st num");
	var num2= prompt("Write 2nd num");
	var num3= prompt("Write Operation(+, -, *, /, %)");
	if(num3=="+"){
	document.write(num1 + num2);
	}if(num3=="-"){
	document.write(num1 - num2);
	}if(num3=="*"){
	document.write(num1 * num2);
	}if(num3=="/"){
	document.write(num1 / num2);
	}if(num3=="%"){
	document.write(num1 % num2);
	}
}


