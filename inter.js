var night = prompt("Please enter night you went");

function HotelConstructor(name,rooms,booked, Avnight,wantNight){
    this.name=name;
    this.rooms=rooms;
    this.booked=booked;
    this.checkAvailabilty=function(){
        return this.rooms - this.booked;
        
    };
}

var hotel = ['Areeg', 'Memo', 'Trend']
var hotel = new HotelConstructor("Areeg",20,10);
console.log(hotel.checkAvailabilty());



var hotel = new HotelConstructor("Memo",10,3);
document.write(hotel.checkAvailabilty());