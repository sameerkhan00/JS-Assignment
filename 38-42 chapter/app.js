            // 1st task

// var a=Number(prompt("write first value"));
// var b=Number(prompt("write second value"));

// document.write("Your raise value is "+Math.pow(a,b));


            //2nd task

// function isLeapYear() { 
//     var year= document.getElementById("year").value; 
      
//     document.getElementById("GFG").innerHTML  
//         = (year % 100 === 0) ? (year % 400 === 0) 
//                              : (year % 4 === 0); 
// }
            // 3rd task

//function triarea(side1,side2,side3) {
// 	var p = (side1+side2+side3)/2;
// 	var a = Math.sqrt(p*(p-side1)*(p-side2)*(p-side3));
//   return a;
// }

//document.write(triarea(11,9,9));

            // 4th task

// function marks(){
    
//     var sub1=Number(prompt("enter maths subject marks"));
//       var sub2=Number(prompt("enter urdu subject marks"));
//      var sub3=Number(prompt("enter english subject marks"));
//     function avg(){
//        var a=sub1+sub2+sub3/300;
//        document.write("Average of your marks is "+a+"<br/>");
//     }avg();
//     function per(){
//         var p=sub1+sub2+sub3/300*100

//         document.write("percentage is "+p+"%"+"<br/>");
//     }per();
// }
// marks();  

      // 6th task
                
// var strings = ["Muhammad", "sameer", "khan", "student of", "saylani"];
// strings = strings.map(function (string) {
//     return string.replace(/[aeiou]/g, '');
// });
// console.log(strings);
// function reverse(s) {
//     let i = s.length,
//         o = '';
//     while (i > 0) {
//         o += s.substring(i - 1, i);
//         i--;    
//     }
//     console.log(o);
//     return o;
// }
//reverse('hello');

    // 7th task

    // function myFunction() {
    //     var str = "Pleases read this application and give me gratuity"; 
    //     var res = str.match(/ea/g);
    //     document.getElementById("para").innerHTML = res;

    // 8th task

// function convert(){
// var k=document.getElementById("km");

// function meter(){
//    var a =k.value*1000;
// alert("in Meters "+a);

// }meter();
// function feet(){
//     var a =k.value*3280.0;
//     alert("in Feet "+a);

// }feet();
// function inches(){
//     var a =k.value*39370;
//     alert("in inches "+a);


// }inches();
// function centi(){
//     var a =k.value*100000;
//     alert("in centimeter "+a);

// }centi();


         // 9th task

// var workingHour=40;
// var overTimePay=12;
// var hour=Number(prompt("Enter your working hour"));
// // var overTime=workingHour-hour;
// if (hour>=40){
//     overTime=workingHour-hour;
//     overTimePayment=overTime*12;
//     document.write(""+overTimePayment)
    

// }else {
//     document.write("you are not eligible ! working hour less then 40")
// }


        // 10th task

// var amount= Number(prompt("enter amount u withdraw"));
// document.write("your entered amount is "+amount+"<br>")
// document.write("notes of 100 is "+ Math.floor(amount/100)+"<br>");
// document.write("notes of 50 is "+ Math.floor(amount%100/50)+"<br>");
// document.write("notes of 10 is "+ Math.floor(amount%100%50/10)+"<br>");
// document.write("still remaining is"+Math.floor(amount%100%50%10)+"<br>")