// 1st task

// var firstName=prompt("Enter your first name");
// var secondName=prompt("Enter your last name");
// var combine=firstName.concat(secondName);
// document.write(" your full name is "+combine);

// 2nd task

// var phone=prompt("Enter your favourite phone");
// var decribe=phone.length;
// document.write("My favourite phone is "+phone+"<br/>"+"the lenght of string is "+decribe);

// 3rd task

// var name ="pakistani";
// var final=name.indexOf("n");
// document.write("String Pakistani"+"<br/>"+"Index of n is "+final);

// 4th task

// var name ="Hello World";
// var final=name.lastIndexOf("l");
// document.write("String Hello world"+"<br/>"+"Index of l is "+final);

// 5th task

// var name ="pakistani";
// var final=name.charAt(3);
// document.write("String Pakistani"+"<br/>"+"Index of 3 is "+final);

// 6th task
// var firstName=prompt("Enter your first name");
// var secondName=prompt("Enter your last name");
// var combine=firstName.concat(secondName);
// document.write(" your full name is "+combine);
 
// 7th task

// var city1="Hyderabad";
// var rep=city1.replace("Hydera","Islama");
// document.write("City "+city1+"<br/>"+"After Replacement "+rep);

// 8th task

// var message = "Ali and Sami are best friends. They play cricket and football together";
// var rep= message.replace("and", "&");
// document.write(rep);

// 9th task

// var a="472";
// var num=parseInt(a);
// document.write("Value :"+a+"<br/>");
// document.write(typeof(a)+"<br/>");
// document.write("Value :"+a+"<br/>");
// document.write(typeof(num)+"<br/>");
// var k=typeof(num);

// 10th task

// var inp=prompt("Enter anything");
// var convert=inp.toUpperCase();
// document.write(convert);

// 11th task

// var value=prompt("Enter anything");
// var title=value.toUpperCase();
// document.write(title);

// 12 task
 
// var num=345.6;
// var n=Math.trunc(num);
// document.write(n);

// 13 Task

// var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
// var checkForSpecialChar = function(string){
//  for(i = 0; i < specialChars.length;i++){
//    if(string.indexOf(specialChars[i]) > -1){
//        return true
//     }
//  }
//  return false;
// }

// var str = prompt("enter ur name", "not contain any special character");
// if(checkForSpecialChar(str)){
//   alert("Not Valid");
// } else {
//     alert("Valid");
// }


//14 task

// var A = ["cake","apple pie","cookie","chips","patties"]; 
//     var search=prompt("Wellcome to our BOMBAY bakery What do you want to order sir/maam ");
//     var l=A.indexOf(search);
   
//  if(A.toLowerCase()===A.toUpperCase());{
//     document.write(search +" is available at index "+l+" in our bakery");
    
//     else if ( A.indexOf(search) == -1 ) {
//         document.write("We are sorry."+search +" is not available in our bakery");}


// 15 task

// var input = prompt("Enter password");
// var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// if (!nums.includes(parseInt(input.charAt(0))) && input.length>='6') {
//     alert("password is valid");
// }
// else {
//     alert("Enter a valid password"+"<br/>"+"Password should not start with number"+"<br/>"+" Length must be 6 character");
// }

//16 task 

// var str = "How are you doing today?";
//   var res = str.split(" "+"<br/>");
//   alert(res);

 // 17th task

// var indx="pakistani";
// var no=indx.charAt(8);
// document.write("Last Character "+no);

//18th task

// function count(main_str, sub_str) 
//     {
//     main_str += '';
//     sub_str += '';

//     if (sub_str.length <= 0) 
//     {
//         return main_str.length + 1;
//     }

//        subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//        return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
//     }
 
// document.write(count("The quick brown fox jumps over the lazy dog", 'the'));
// document.write(count("The quick brown fox jumps over the lazy dog", 'fox',false));
