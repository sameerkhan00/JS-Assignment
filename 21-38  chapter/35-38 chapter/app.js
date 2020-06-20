// 1st task

// function time(){
//   var n= new Date();
//  document.write(n);}
// time();

// 2nd task

// function myName(){
//  var a=prompt("enter ur name");
// document.write("Hello ! Good Morning "+a);
// }
// myName();

// 3rd task

// function myFunction(){
// var a=Number(prompt("Enter no 1"));
// var b=Number(prompt("Enter no 2"));
// var d=a+b;
// document.write(d)
// }
// myFunction();

// 4th task

// function calculator(){
// var a=Number(prompt("Enter value"));
// var op=prompt("Enter operator +,-,*,/");
// var b=Number(prompt("Enter value 2"));

// if (op=='+'){
//     document.write("Addition is "+a+b);
// }
// else if (op=='-'){
//     document.write("Subtraction is "+a-b);
// }
// else if (op=='*'){
//     document.write("Multiplication is "+a*b);
// }
// else if (op=='+'){
//     document.write("Division is "+a/b);
// }
// else{
//     alert("Wrong input!")
// }
// }
// calculator();

// 5th task

// function square(){
//     var a=Number(prompt("Enter value for square "));
//     var sq=a*a;
//     document.write("Square of your value is "+sq);
// }
//     square();

// 6th task

// function factorial(x) 
// { 
//     var x=Number(prompt("Enter a no"))

//     if (x === 0)
//    {
//       return 1;
//    }
//     return x * factorial(x-1);
           
//   }
//   document.write(factorial(5));

// 7th task  

// function count(){
//     var a=Number(prompt("Enter no from where u want to start"));
//     var b=Number(prompt("Enter no from where u want to end"));
//     for(var i=a; i<=b; i++){
//         document.write(" "+i+"<br/>")
//     }

// }
// count();

// 8th task

//  function tri(){
//      var base=Number(prompt("enter base"));
//      var perp=Number(prompt("Enter perpendicular"));
//      var hypo=(base*base)+(perp*perp);
//      document.write("hyp is"+hypo);
//      function double(){
//          var sq=hyp*hypo;
//         document.write("square Root is"+sq);         
//      }
//  }
//  tri();
//  double();

// 9th task

// function areaTriangle(){
    //     var height=Number(prompt("Enter height "));
    //     var width=Number(prompt("Enter width"));
    //     var area=height*width;
    //     document.write("Area of Triangle is "+area);
    // }
    // areaTriangle();

//10 task

// var name=prompt("Check word");
// var check="";
// for (var i=name.length-1; i>=0; i--){
//     check +=name[i]
// }
// console.log(name,check);

// 11th task

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("web and mobile hybrid application"));


// 12th task

// function find(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find('web and mobile hybrid application'));

//13th task

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('syalani.com', '0'));

//14 task


// function circle(a,b){
//     alert("Circumference if circle " +2*a*b)
// function circum(a,b){
// alert("Area of circle "+b*a*a)
// }
// circum(10,2);
// }
// circle(10,2);

