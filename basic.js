function age(bithyear){
 var curr= new Date() ;
  var cal= curr.getFullYear();
  var age= cal - bithyear;

  document.write(age);
  

}

age(1988);