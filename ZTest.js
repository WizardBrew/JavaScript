// console.log(2 + 2);

// console.time('Your Time Started');
// console.log("The time has started");
// console.log([0,1, 2, 3, 4, 5, 6, 7])

// console.timeEnd('Time Taken');
// let age = 200;
// console.assert(age<189, 'This is not Possible now')
// console.error('This is an Error');
// console.clear();
/*
This is the Multiline comment
this can be used to explain*/


// let myArray = [1, 2, 3, 4, 5];

// let sum = myArray.reduce(function (acc , cons){
//         return acc + cons;
// }, 0);

// myArray(sum)

// function double(numbers) {
// return numbers.map(function(n) {
// return n +100;
// });
// }

// console.log(double([2, 3, 4, 5]))

// function double(numbers) {
// return numbers.filter(n=>n>18).map(n=>n*2);
// }
// let numbers=[17,19,20,18];
// console.log(double(numbers));

// function double(age){
// return age.filter(x=> x%2==0)
// }
// console.log(double([12, 3, 4, 6]))
// //-------------------------------------------------------------
// function double(even) {
// return even.map(n => n%2==0);
// }
// console.log(double([12, 20, 30, 17]));
// //-----------------------------------------------------------
// function double(even) {
// return even.filter(n => n%2==0);
// }
// console.log(double([12,20,30,17]));
// //=====-------------------------------

// const users=[
// {firstName:"john",lastName:"Biden",age:26},
// {firstName:"jimmy",lastName:"cob",age:75},
// {firstName:"sam",lastName:"lewis",age:50},
// {firstName:"Ronald",lastName:"Mathew",age:26},
// ];
// //-- sol; 1
// const fullNames = users.map((user) => `${user.firstName} ${user.lastName}`);
// console.log(fullNames);
// console.log(firstName);
// //sol-2
// const output=users.map((x)=>{
// return x.firstName+" "+x.lastName;
// })
// //===----------------------------------------------=

// const users=[
// {firstName:"john",lastName:"Biden",age:26},
// {firstName:"jimmy",lastName:"cob",age:75},
// {firstName:"sam",lastName:"lewis",age:50},
// {firstName:"Ronald",lastName:"Mathew",age:26},
// ];
// ques: filter users above 50

// //sol -0
// const outputUsers=users.map((x)=>{
// return x>50 })
// //- sol 1
// const usersAbove50 = users.filter((user) => user.age > 50);
// // sol 2
// let output=user.filterabove((x)=>{
// return x.age> 50;
// })
// console.log(output)

// //----=== to get sam and jimmy
// const ageOp = users.filter(user => user.age > 30);
// const fName = ageOp.map(user => user.firstName);
// console.log(fName);
// //------ below alternate
// const output=
// users.filter(user => user.age > 30).map(user1 => user1.firstName)
// console.log(output)


// const object1 = {};
// a = Symbol('a');
// b = Symbol.for('b');
// object1[a] = 'harry';
// object1[b] = 'derry';
// const objectSymbols = Object.getOwnPropertySymbols(object1);
// console.log(objectSymbols.length);

// const object1 = {
//   property1: 20
// };
// const object2 = {
//   property1: 20
// };
// console.log(Object.is(object1, object2));

// class Rect {
//   constructor(h, w) {
//     this.height = h;
//     this.width = w;
//   }
//   foo() {
//     return this.height * this.width;
//   }
// }
// const sq = new Rect(5, 20);
// console.log(sq.foo());

// const obj1 = {
//   property1: 2
// };
// Object.seal(object1);
// obj1.property1 = 4;
// console.log(obj1.property1);
// delete obj1.property1;
// function Person() {
//   this.name = "Rahul";
// }
// function Obj() {
//   Person.call(this);
// }
// Obj.prototype = Object.create(Person.prototype);
// const app = new Obj();
// // console.log(app.

// class Rect {
//   constructor(h, w) {
//     this.height = h;
//     this.width = w;
//   }
//   foo() {
//     return this.height * this.width;
//   }
// }
// const sq = new Rect(5, 20);
// console.log(sq.foo());

// function F() {
//   // Constructor function definition
// }
// var o = new F();
// console.log(o.constructor === F);


// const prototype1 = {};
// const object1 = Object.create(prototype1);
// console.log(Object.getPrototypeOf(object1) === prototype1);

const pt1 = {};
const ob1 = Object.create(pt1);
console.log(Object.getPrototypeOf(ob1) === pt1);

// var obj = new Fun(); 
// console.log(obj.constructor === Fun)


// var obj = new Fun();
// console.log(obj.constructor === Fun)
