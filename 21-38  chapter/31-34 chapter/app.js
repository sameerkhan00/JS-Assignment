// (31 to 34 chapter)

// 1st task

// var today = new Date();
// document.write(today);

// 2nd task
                // on number
// var today = new Date();
// var mnth=today.getMonth();
// document.write(mnth);

//                 on character
// var monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"];
// var d = new Date();
// document.write("The current month is " + monthNames[d.getMonth()]);

// 3rd task

// var monthNames = ["Monday", "tuesday", "wednesday","thursday","friday","satrday","sunday"];
// var d = new Date();
// var a=monthNames[d.getDay()-1].substr(0,3);
// alert(a);

// 4th task

// var monthNames = ["Monday", "tuesday", "wednesday","thursday","friday","saturday","sunday"];
// var d = new Date();
// var a=monthNames[d.getDay()-1];
// if (a=='tuesday' || 'wednesday'){
//     alert(" it's fun day");
// }
// else{
//     document.write("error")
// }

// 5th task

// var d= new Date();
// var a=d.getDate();
// if (a<=15){
//     document.write("First fifteen days of the month")

// }
// else{
//     document.write("Last fifteen days of the month")
// }

// 6th task

//  var today = new Date();
//  var a= today.getTime();
//  document.write("Current date :"+today+"<br/>");
// document.write(a);


// 7th task

// var today = new Date();
// var a=today.getHours();

// if (a<=12){
//     document.write(" It's am")
// }
// else(
//     document.write("It's pm")
// )

//  var today = new Date();
//  var d=today.setFullYear(2020);
//  var y=today.setMonth(12);
//  var x=today.setDate(31);
//  document.write(d);
// var d = new Date();
// var x= d.setFullYear(2001);
// alert(x);



// 12 task

// var d = new Date();
//   d.setFullYear(1920);
//   alert(d);

// 13 task

// var dob=new Date(prompt("Enter ur date of birth","Dec 10, 1996 "));
// var dobmili=dob.getTime();
// var today=new Date();
// var todaymili=today.getTime();
// var diff =todaymili-dobmili;
// var age=Math.floor(diff/(1000*60*60*24*30*12));
// document.write("your age is "+age);


// 14 Task

// var monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"];
// var d = new Date();
// var name=prompt("Enter ur name");
// var unitUsed=Number(prompt("Enter units"));
// var unit=16;
// var lateCharges=350;
// var netAmount=unitUsed*unit;
// var dueDate=netAmount+lateCharges;

// document.write("Customer Name : "+name+"<br/>");
// document.write("Month is : " + monthNames[d.getMonth()]+"<br/>");
// document.write("Number of units : "+unitUsed+"<br/>" );
// document.write("Charges per unit : "+"16"+"<br/>");
// document.write("<br/>");
// document.write("Net Amount Payable (within due date) : "+netAmount+"<br/>")
// document.write("Late Amount surcharge : "+lateCharges+"<br/>");
// document.write("Gross Amount Payable (after due date) : "+dueDate);