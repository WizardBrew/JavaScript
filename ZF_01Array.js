const arr = [10, 20, 55, 70, 58, 60, 90]
// arr= [25,40,60]      // this cannot be done but

arr.push(100);  // can add elements but cannot redeclare again;
console.log(arr)

const marks = [50, 65, 82, 95, 76];
const fruits = ['Apple', 'Orange', 'Pineapple', 'Banana'];
const mixed = ['mystr', 80, ['Apple', 40]];
const arra = new Array(45, 90, 50, 'Apples');

console.log(arra);
console.log(fruits);
console.log(mixed);
console.log(arra.length, '-- Length of Arra');

let val = marks.indexOf(82)
console.log(val)
console.log('--===========------')//==----=====---==

let arr1 =  [10, 20, 55, 70, 58, 60, 90] 
console.log(arr1)                       // Below are not return Value it changes array
arr1.splice(1, 4)                       // removes 1 to 5 range
console.log('Display 1- 5 ', arr1)  
arr1.push("Graph", "Mango");
console.log(arr1)               // cannot mention in console.log
arr1.unshift(99999)                // cannot mention in console.log
console.log(arr1)        
arr1.pop()                              // removes from end
console.log(arr1)
arr1.shift()                            // removes from Front
console.log(arr1)
arr1.reverse()
console.log(arr1)

let arr2 =[100, 200]
arr1 = arr1.concat(arr2);       // to concat this reassign 
console.log(arr1)
