console.log("Objects Part 2")

let obj1 = {
        Cname: 'Maruti 800',
        topspeed: 80,
        run: function () {
                console.log("car is running ");
                }


}
console.log(obj1);


function GeneralCar(givenName, givenSpeed) {
        this.name = givenName;
        this.speed = givenSpeed;
        this.run = function () {
                console.log(`${name} car is running `)
        }
        this.analys = function () {
                console.log(`This car is ${200 - this.speed} than the Mercedes`)
        }
}


car1 = new GeneralCar('Maruti', 120);
car3 = new GeneralCar('Mercedes', 200)

console.log(car1)
console.log(car3)
