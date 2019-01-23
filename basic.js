function age(bithyear){
 var curr= new Date() ;
  var cal= curr.getFullYear();
  var age= cal - bithyear;

  document.write(age);


}

age(1988);
// Exercise two

function subs(par1,par2){
   var elstr= par1.substring(0, par2);
   document.write("<br>" + elstr);
}
subs("I am a hero from World of Warcraft",12);