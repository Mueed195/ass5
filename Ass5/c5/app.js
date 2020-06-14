function t1() {
      var a=prompt("Enter 1st number");
      var b=prompt("Enter 2nd number");
      var num1 = parseInt(a);
      var num2 = parseInt(b);
	  var res = num1 + num2;
	  document.write("Sum of "  + num1 + " and " + num2 + " is " + res);
}

function t2() {
      var a=prompt("Enter 1st number");
      var b=prompt("Enter 2nd number");
      var num1 = parseInt(a);
      var num2 = parseInt(b);
	  var sum = num1 + num2;
	  var sub = num1 - num2;
	  var div = num1 / num2;
	  var mul = num1 * num2;
	  var mod = num1 % num2;
	  document.write("Adition of "  + num1 + " and " + num2 + " is " + sum + "." + " Subtraction of "  + num1 + " and " + num2 + " is " + sub + "." + " Division of "  + num1 + " and " + num2 + " is " + div + "." + " Multiplication of "  + num1 + " and " + num2 + " is " + mul + "." + " Modulus of "  + num1 + " and " + num2 + " is " + mod + ".");
}

function t3() {
	var a;
	document.write(a + "<br>");
	var b = "5";
	document.write(" Initial value: " + b + "<br>");
	b++;
	document.write(" Value after increment is " + b + "<br>");
	var add = b + 7;
	document.write(" value after adition is " + add+ "<br>");
	add--;
	document.write(" Value after decrement is " + add+ "<br>");
	var mod = add % "3";
	document.write(" The remainder is: " + mod+ "<br>");
}

function t4(){
	var a = 600;
	var b = 5;
	var mul = a * b;
	document.write("Total cost to buy " + b + " tickets to a movie is " + mul + "PKR");
}

function t5(){
	var a = 5;
	for (var i=1; i<=10; i++ ){
	document.write(a + " x " + i + " = " + a*i + "<br>");
	}
}

function t6(){
	var c=25.55;
	var f=78;
	var celsius=(f-32)*(5/9); 
	document.write( "Conversion of farenhiet " + f + " into Celsius is = " + celsius + "<br>");
	var farenhiet= (c*9/5)+32;
	document.write( "Conversion of celsius " + c + " into Farenhiet is = " + farenhiet);
}

function t7(){
	var item1 = 650;
	var quantity = 3;
	var totalitem1 = item1*quantity;
	var item2 = 100;
	var quantity2 = 7;
	var totalitem2 = item2*quantity2;
	var DC = 100;
	var res = totalitem1+totalitem2+DC;
	document.write("<h1>Shopping Cart</h1>" + "<br>" + "Price of Item 1 is " + item1 + "<br>" + "Quantity of item 1 is " + quantity + "<br>" + "Price of Item 2 is " + item2 + "<br>" + "Quantity of item 2 is " + quantity2 + "<br>" + "Shipping charges is " + DC + "<br>" + "<br>" + "Total Cost of your order is " + res);
}

function t8(){
	var t = 980;
	var o = 804;
	var div = o/t;
	var per = 100;
	var mul = div*per;
	document.write("<h1>Marks Sheet</h1>" + "<br>" + "<br>" + "Total Marks: " + t + "<br>" + "Obtained Marks: " + o + "<br>" + "<br>" + "Percentage: " + mul + "%");
}

function t9(){
	var us = 10;
	var s = 25;
	var res = s*28 + us*104.80;
    document.write("<h1>Currency in PKR</h1>" + "<br>" + "Total Currency in PKR: " + res);	
}

function t10(){
	var num = 5;
	var res = ((num+5)*10)/2;
	document.write(res);
}

function t11(){
	var cy = 2020;
	var by = 1998;
	var min = cy-by;
	document.write("<h1>Age Calculator</h1>" + "Current Year: " + cy + "<br>" + "Your Birth Year: " + by + "<br>" + "Your age is: " + min);
}

function t12(){
	var radius = 20;
	var cir =(2*3.142)*radius;
	var a = 3.142*radius*radius;
	document.write("<h1>The Geometrizer</h1>" + "<br>" + "Radius of a circle: " + radius + "<br>" + "The Circumference is: " + cir + "<br>" + "The area is: " + a);
}

function t13(){
	var fs = "Chocolate Chip";
	var age = 15;
	var e = 65;
	var a = 3;
	var min = e - age;
	var mul = min*a;
	document .write("<h1>The Life Time Supply Calculator</h1>" + "<br>" + "Favourite Snack: " + fs + "<br>" + "Current Age: " + age + "<br>" + "Estimated Maximum Age: " + e + "<br>" + "Amount of Snacks per day: " + a + "<br>" + "You will need " + mul + " Chocolate chip to last you until the ripe old age of " + e);
}







