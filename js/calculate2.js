//Adding 1
var arrayCompute = ""
 document.getElementById("btn1").addEventListener("click",firstOne);
 function firstOne(){
    var a = 1;
   // alert(a);
    arrayCompute = arrayCompute + a;
 
 var display = document.getElementById("test");
  display.innerHTML = arrayCompute;
 }
//Adding 2
 document.getElementById("btn2").addEventListener("click",secondOne);
 function secondOne(){
    var a = 2;
   // alert(a);
    arrayCompute = arrayCompute + a;
 var display = document.getElementById("test");
  display.innerHTML = arrayCompute;
 }
//Adding 3
 document.getElementById("btn3").addEventListener("click",function (){
   var a = 3;
   // alert(a);
    arrayCompute = arrayCompute + a;
 var display = document.getElementById("test");
  display.innerHTML = arrayCompute;
 })
//Adding 4
 document.getElementById("btn4").addEventListener("click",function (){
   var a = 4;
   // alert(a);
    arrayCompute = arrayCompute + a;
 var display = document.getElementById("test");
  display.innerHTML = arrayCompute;
 })
//Addiing 5
 document.getElementById("btn5").addEventListener("click",function (){
   var a = 5;
   // alert(a);
    arrayCompute = arrayCompute + a;
 var display = document.getElementById("test");
  display.innerHTML = arrayCompute;
 })
//Adding 6
 document.getElementById("btn6").addEventListener("click",function (){
   var a = 6;
   // alert(a);
    arrayCompute = arrayCompute + a;
 var display = document.getElementById("test");
  display.innerHTML = arrayCompute;
 })
//Adding 7
  document.getElementById("btn7").addEventListener("click",function (){
   var a = 7;
   // alert(a);
    arrayCompute = arrayCompute + a;
 var display = document.getElementById("test");
  display.innerHTML = arrayCompute;
 })
 //Adding 8
 document.getElementById("btn8").addEventListener("click",function (){
   var a = 8;
   // alert(a);
    arrayCompute = arrayCompute + a;
 var display = document.getElementById("test");
  display.innerHTML = arrayCompute;
 })
 //Adding 9
 document.getElementById("btn9").addEventListener("click",function (){
   var a = 9;
   // alert(a);
    arrayCompute = arrayCompute + a;
 var display = document.getElementById("test");
  display.innerHTML = arrayCompute;
 })
//Adding 0
 document.getElementById("btn0").addEventListener("click",function (){
   var a = 0;
   // alert(a);
    arrayCompute = arrayCompute + a;
 var display = document.getElementById("test");
  display.innerHTML = arrayCompute;
 })
 //Adding . dot for decimal point
 document.getElementById("btn.").addEventListener("click",function (){
   var a = ".";
   // alert(a);
    arrayCompute = arrayCompute + a;
 var display = document.getElementById("test");
  display.innerHTML = arrayCompute;
 })
 //Putting addition
 document.getElementById("plus").addEventListener("click",function (){
   var a = "+";
   // alert(a);
    arrayCompute = arrayCompute + a;
 var display = document.getElementById("test");
  display.innerHTML = arrayCompute;
 }) 
 //Putting Subtraction
 document.getElementById("minus").addEventListener("click",function (){
   var a = "-";
   // alert(a);
    arrayCompute = arrayCompute + a;
 var display = document.getElementById("test");
  display.innerHTML = arrayCompute;
 })
 //Putting multiplication
 document.getElementById("multiply").addEventListener("click",function (){
   var a = "*";
   // alert(a);
    arrayCompute = arrayCompute + a;
 var display = document.getElementById("test");
  display.innerHTML = arrayCompute;
 })
 //putting division
 document.getElementById("divide").addEventListener("click",function (){
   var a = "/";
   // alert(a);
    arrayCompute = arrayCompute + a;
 var display = document.getElementById("test");
  display.innerHTML = arrayCompute;
 })
 //Putting the summation
document.getElementById("equal-to").addEventListener("click", function(){
 var b = eval(arrayCompute);
var result = document.getElementById("result-box");
 result.innerHTML = b;

})

//Putting square-root
document.getElementById("square-root").addEventListener("click", function(){
   var a = eval(arrayCompute)
   b = Math.sqrt(a);
   var display = document.getElementById("test");
      display.innerHTML = `sqrt(${arrayCompute})`;
   var result = document.getElementById("result-box");
   result.innerHTML = b

    })
    //Code to clear all 
    document.getElementById("clear").addEventListener("click",function (){
      var a = ""
       arrayCompute = a;
     var display = document.getElementById("test");
      display.innerHTML = arrayCompute;
    })
//Code to delete elements one by one
    document.getElementById("cancel").addEventListener("click",function (){
       arrayCompute = arrayCompute.substring(0, arrayCompute.length - 1)
        var display = document.getElementById("test");
        display.innerHTML = arrayCompute;
 
    })









    // Changing the display 
   
    var a = document.querySelector(".wrapper1");
    var toogleBtn = document.getElementById("toggle-color");
    var b = document.getElementsByClassName("item-fill");


   toogleBtn.addEventListener("click", function(){
     // toogleBtn.style.backgroundColor = "rgb(197, 98, 98)";

      if (toogleBtn.style.backgroundColor == "rgb(197, 98, 98)"){
   toogleBtn.style.backgroundColor = "rgb(118, 62, 148)";
   a.style.backgroundImage = "url('MyCalculator2.jpg')";
     

   for(var i = 0; i < b.length; i++){
      b[i].style.backgroundColor = "rgb(197, 98, 98)";
   }
 

}
   else{
      toogleBtn.style.backgroundColor = "rgb(197, 98, 98)";
      a.style.backgroundImage = "url('myCalculator3.jpg')";
    
   
      for(var i = 0; i < b.length; i++){
         b[i].style.backgroundColor = "rgb(118, 62, 148)";
      }
    
   }
  })
     
//   toogleBtn.addEventListener("click", function(){
//    a.style.backgroundImage = "url('MyCalculator2.jpg')"; 
//   })  

