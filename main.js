var num= document.getElementById("num");
let btn=document.getElementById("decrese");
var text1=parseInt(num.value);
btn.addEventListener("click",function(){
  if(num.value>0){
    
 num.value=--text1;
  }
 })

let btn1=document.getElementById("increse");
btn1.addEventListener("click",function(){
 
  num.value=++text1;  

    
   
  })

