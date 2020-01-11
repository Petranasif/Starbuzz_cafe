var car = {   /*obiectul*/
    make: "honda",
    model: "accord",
    year: 2010,
    color: "gray",
    passengers: 4,
    mileage: 2000,
    engineIsOn: false, //aceasta este o proprietate care ne spuna ca masina este pornita.
    fuel: 50, /* cat benzina am*/
    maxFuel: 50, /*capacitatea rezervorul*/
    mediumConsumption: 7.5, 
    refill: function(num) {
        if(this.fuel + num > this.maxFuel) {
            this.fuel = this.maxFuel;
            console.log("too much");
        } else {
        this.fuel += num;
        }
    },
    drive: function(distance) {
        if(this.distanceToEmpty() < distance) {
            console.log("too far");
            distance = this.distanceToEmpty();

        }
        consumption = Math.round(distance * this.mediumConsumption / 100); /* am pus math.round ca sa retungeasca
        numarul sau rezultatul formulei*/
        this.fuel -= consumption;
        this.mileage += distance;
        
    },
    distanceToEmpty: function() {
        return Math.round(this.fuel / this.mediumConsumption * 100); 

    },

    stop: function() { /*acestea stop si start sunt comportamente si sunt proprietati*/
        if(this.engineIsOn) {
            this.engineIsOn = false;
            console.log("car stopped");
        } else {
            console.log("car is already stopped");
        }
    },
    start: function() {
        if(!this.engineIsOn) {
            this.engineIsOn = true;
            console.log("car started");
        } else {
            console.log("car is already started");
        }
        
    }, /* foarte important sa pun virgula dupa } */
}
// ca sa schimbam kiometrajul facem asa:
car.mileage = 2150;
console.log(car["mileage"]); /* o varianta de a afisa proprietatea variantei car este car.numele proprietaii
o alta metoda este car["numele proprietati"]  dar deobicei se foloseste varianta cu punct*/
console.log(car.year);
// ca sa pornim masina:
car.start(); /* ca sa definim actiunea am pus () adica apeeaza blocul de cod sus cu function */
car.start();
car.engineIsOn = false;

car.drive(100);
console.log(car.fuel);
car.drive(800);
console.log(car.fuel);
car.refill(30);
console.log(car.fuel);


// for(prop in car) {
//     console.log(prop + "="+ car[prop]);
// }