var car = {
    make: "Honda",
    model: "Accord",
    year: 2009,
    color: "grey",
    passengers: 4,
    mileage: 2000,
    engineIsOn: false,  
    fuel: 50,
    maxFuel: 50, /*capaciate maxima de benzina care intra in rezervor*/
    mediumConsumption: 7.5, /*cat conuma la 100km*/
    refill: function(num) {
        if (this.fuel + num > this.maxFuel ) {
            this.fuel = this.maxFuel;
            console.log("too much");
        } else {
            this.fuel += num;
        };
    },
    // drive: function(distance) {
        
    //     var tripConsumption = (distance*this.consumption)/100 
    //     if ( tripConsumption > this.fuel) {
    //         console.log ("not enough fuel")
    //     } else {
    //         console.log("go")
    //         this.mileage += distance;
    //         this.fuel -= tripConsumption
    //     };
    // },
    drive: function(distance) {
        if(this.distanceToEmpty() < distance) {
            console.log("too far");
            distance = this.distanceToEmpty();

        }
        consumption = (distance * this.mediumConsumption / 100); /* am pus math.round ca sa retungeasca
        numarul sau rezultatul formulei*/
        this.fuel -= consumption;
        this.mileage += distance;
        
    },
    distanceToEmpty: function() {
        return (this.fuel / this.mediumConsumption * 100); 
    },
    
    stop: function () {
        if(this.enginIsOn) {
            this.enginIsOn = false;
            console.log("car stopped");
        } else {
            console.log("car is already stopped")
        }; 
    },
    start: function () {
        if(!this.engineIsOn){
            this.enginIsOn = true;
            console.log("car started");
        } else {
            console.log("car is already started")
        }; 
    },
};

car.mileage = 2150;
console.log(car.mileage) 
console.log(car.year)

car.start(); 
car.start();
car.engineIsOn = false; 

// for(prop in car) {
//     console.log(prop + "=" + car[prop]);

// };

car.drive(100);
console.log(car.fuel);
car.drive(800);
console.log(car.fuel);
car.refill(30)
console.log(car.fuel)

