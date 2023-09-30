/* Data Types
Primitive Data types
        1. String       2. Numbers      3. Bool
        4. Null         5. Undefined    6.Symbol

Reference data Types:
        1. Arrays                       2. Object Literals              
        3. Functions            4. Dates

*/
let fname = "Wizard";
console.log('Check Data Type', (typeof fname));

let age = 33;
console.log('Check Data Type', (typeof age));

let isArtist = false;
console.log('Check Data Type', (typeof isArtist));

let nullobj = null;
console.log('Check Data Type', (typeof nullobj));
// Shows fake ref data type. its premitive data type though.

let undefd = undefined;
console.log('Check Data Type', (typeof undefd));

console.log("----0000-------====-----0000-------")
// Ref Data Type
let myarr = [10, 20, 30, 40, 50, 60];
console.log('Check myarr data type ', (typeof myarr));

let marks = {
        wizard: 100,
        Brew: 80,
        parvez: 60,
        firstYear: "Passed",
        'Second Year': 95
}
console.log('Check marks data type ', (typeof marks));

function funs() {
        
}
console.log('Check Fun data type', (typeof funs))

let date = new Date();
console.log('Check Date data type', (typeof date))











