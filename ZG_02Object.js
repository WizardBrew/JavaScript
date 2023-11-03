console.log("Objects Part 2")

// let obj1 = {
//         Cname: 'Maruti 800',
//         topspeed: 80,
//         run: function () {
//                 console.log("car is running ");
//                 }


// }
// console.log(obj1);


// function GeneralCar(givenName, givenSpeed) {
//         this.name = givenName;
//         this.speed = givenSpeed;
//         this.run = function () {
//                 console.log(`${name} car is running `)
//         }
//         this.analys = function () {
//                 console.log(`This car is ${200 - this.speed} than the Mercedes`)
//         }
// }


// car1 = new GeneralCar('Maruti', 120);
// car3 = new GeneralCar('Mercedes', 200)

// console.log(car1)

// let car = {
//         name: 'Maruthi',
//         speed: 80,
//         run: function (names, speeds) {
//                 this.namez = names
//                 this.speedz = speeds
//                 console.log(`${this.namez} is running in speed of ${this.speedz}`)
//         }

// }
// console.log(car.run('Alto', 120))

// function GeneralCar(name, speed) {
//         this.names = name;
//         this.tSpeed = speed;
//         this.run = function (add1, add2) {
//                 this.add1 = add1;
//                 this.add2 = add2;
//                 add1 = 'Fog-Lamps';
//                 add2 = 'Air-Bags';
//                 console.log(`This care has the ${add1} and in additional ${add2}`)
//         }
// }

// car = new GeneralCar('Maruti ', 120)
// console.log(car)
// console.log(car.run())

function GeneralCar(Cname, speed) {
        this.name = Cname;
        this.tspeed = speed;

        this.run = function() {
                console.log(`car current speed is ${this.tspeed}`)
        }
        
}
car = new GeneralCar('Maruti', 120)

console.log(car)
console.log(car.run())

function Animals(name, types) {
        this.name = name
        this.types = types
        this.behave = function () {
                console.log(`This is ${name} its is the ${types} kind of Animal`)
        }       

}

animalDis = new Animals("Dog", "Pet")
// console.log(animalDis)
console.log(animalDis.behave())