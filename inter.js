var night = prompt("Please enter the hotel you want to book");

function HotelConstructor(name,rooms,booked){
    this.name=name;
    this.rooms=rooms;
    this.booked=booked;
    this.checkAvailabilty=function(){
        return this.rooms - this.booked;
        
    };
}
var random1=Math.floor(Math.random()*10)
var random2=Math.floor(Math.random()*20)
var random3=Math.floor(Math.random()*30)


var areegHotel = new HotelConstructor("Areeg",10,random1);
var memoHotel= new HotelConstructor("Memo",20,random2);
var trendHotel= new HotelConstructor("Trend",30,random3);
 if(areegHotel.name === 'Areeg'){

 }
if(areegHotel.checkAvailabilty() >= night){
    document.getElementById('color').innerHTML= "We have available rooms" + areegHotel.name + random1;
     document.getElementById("color").style.backgroundColor="green" ;
}else {
    document.write("sorry, no rooms available");
}

if(memoHotel.checkAvailabilty() >= night){
    document.getElementById('color').innerHTML= "We have available rooms" + memoHotel.name + random2 ;
     document.getElementById("color").style.backgroundColor="red" ;
}else {
    document.write("sorry, no rooms available")
}

if(trendHotel.checkAvailabilty() >= night){
   document.getElementById('color').innerHTML= "We have available rooms" + trendHotel.name + random3;
     document.getElementById("color").style.backgroundColor="tomato" ;
}else {
    document.write("sorry, no rooms available")
}

