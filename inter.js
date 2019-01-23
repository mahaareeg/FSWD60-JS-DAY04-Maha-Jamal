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
    document.getElementById('color').innerHTML="We have available rooms" + areegHotel;
     document.getElementById("color").style.backgroundColor="#ff0076";
}else {
    document.write("sorry, no rooms available" + areegHotel)
}



if(memoHotel.checkAvailabilty() >= night){
    document.write("i will resive")
}else {
    document.write("sorry, no rooms available")
}
if(trendHotel.checkAvailabilty() >= night){
    document.write("i will resive")
}else {
    document.write("sorry, no rooms available")
}

