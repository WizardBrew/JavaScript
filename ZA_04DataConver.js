let myvar;
myvar = 34;
console.log(myvar, ' = DataType =>', (typeof myvar))
myvar = String(34)
console.log(myvar, ' = DataType =>', (typeof myvar))

let boolVar = true;
console.log(boolVar, ' = DataType =>', (typeof boolVar))
boolVar =  String(true);
console.log(boolVar, ' = DataType =>', (typeof boolVar))

let date = new Date();
console.log(date, ' = DataType =>', (typeof date))
date = String(new Date());
console.log(date, ' = DataType =>', (typeof date))

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr, ' = DataType =>', (typeof arr))
// console.log(arr.length)
arr = String([1, 2, 3, 4, 5, 6, 7, 8, 9]);   // removes [ ] and count as char
console.log(arr, ' = DataType =>', (typeof arr))
// console.log(arr.length)
let numCon = 20;
// numCon = true;
// numCon = new Date();
console.log(numCon.toString())

let strCon = "99999";
strCon = Number("99999");
// strCon = Number([1,2,3,4,5,6,7]); // SHows Not a Number bcz of problem
// strCon = Number(false); // shows 0
console.log(strCon, (typeof strCon))

let numb = '50000.505';
numb = Number(numb)             // change to number
console.log(numb, (typeof numb))
numb = parseFloat(numb)         // change to Float
console.log(numb, (typeof numb))
numb = parseInt(numb)           // CHange to INT
console.log(numb, (typeof numb))

let price = parseFloat('2999.9705')
console.log(price, (typeof price))
console.log(price.toFixed(2), (typeof price))




