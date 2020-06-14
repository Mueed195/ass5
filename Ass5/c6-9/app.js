function t1(){
      var a= 10;
      document.write("<h2>Result:</h2>" + "<br>" + "The value a is: " + a + "<br>" + "..............................." + "<br>" + "<br>" );
      ++a
	  document.write("The value of a++ is: " + a +"<br>" + "Now the value of a++ is: " + a + "<br>" + "<br>");
	  document.write("The value of a++ is: " + a +"<br>");
	  ++a
	  document.write("Now the value of a is: " + a +"<br>" + "<br>");
	  --a
	   document.write("The value of --a is: " + a +"<br>");
	   document.write("Now the value of a is: " + a +"<br>" + "<br>");
	   document.write("Now the value of a-- is: " + a +"<br>");
	   --a
	   document.write("Now the value of a is: " + a);
}

function t2(){
	var a = 2, b = 1;
	var res= --a - --b + ++b + b--;
	//--a;
	//--a - --b;
	//--a - --b + ++b;
	//--a - --b + ++b + b--;
	document.write("a is " + a + "<br>" + "b is " + b + "<br>" + "Result is " + res);
}

function t3(){
	var a= prompt("Enter Your Name");
	alert("Welcome to our site "+ a + "!");
}

function t4(){
	var a = prompt("Enter the Table number")||5;
	var num1=parseInt(a);
	for (var i=1; i<=10; i++ ){
	document.write(num1 + " x " + i + " = " + num1*i + "<br>");
}
}

function t5(){
	var a= prompt("Enter Your Subject Name");
	var b= prompt("Enter Your Subject Name");
	var c= prompt("Enter Your Subject Name");
	var tm = 100;
	var o1= prompt("Obtained Marks of 1st Subject");
	var ob1=parseInt(o1);
	var o2= prompt("Obtained Marks of 2nd Subject");
	var ob2=parseInt(o2);
	var o3= prompt("Obtained Marks of 3rd Subject");
	var ob3=parseInt(o3);
	var ob=ob1+ob2+ob3;
	var total= tm+tm+tm;
	var per1=(ob1/tm)*100;
	var per2=(ob2/tm)*100;
	var per3=(ob3/tm)*100;
	var per=(ob/total)*100;
	document.write("<table><tr><td>Subject</td><td>Obtained Marks</td><td>Total Marks</td><td>Percentage</td></tr>");
	document.write("<tr><td>" + a + "</td><td>"+ob1+"</td><td>"+tm+"</td><td>"+per1+"</td></tr>");
	document.write("<tr><td>" + b + "</td><td>"+ob2+"</td><td>"+tm+"</td><td>"+per2+"</td></tr>");
	document.write("<tr><td>" + c + "</td><td>"+ob3+"</td><td>"+tm+"</td><td>"+per3+"</td></tr>");
	document.write("<tr><td>" + "</td><td>"+ob+"</td>" + "<td>"+total+"</td><td>"+per+"</td></tr>");
	
}















