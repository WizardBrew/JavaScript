console.log("---==== While_Loop====----")

let j = 0;
while (j < 10) {
        j++;
        console.log(j);
}
console.log("====---For_Loop---=====");

for (let i = 0; i < 10; i++){
        // if (i == 6) {
        //         continue // skips the number i==6
        //         break
        // }
        console.log(i);
}
console.log("---===---- Do_While-----====--");

let k = 10;             // it will run atleast onec even if the condition is meeting 
// let k = 0;)
do {
        k++
        console.log(k)
}while(k<10)

console.log("---===---- For_Each-----====--");

let arr = [10, 20, 30, 40, 50, 60, 70, 80];
arr.forEach(function(element, index, array) {                 // Method --1
        console.log(element,index,array);       //Shows index and array     
});
let arr1 =['apple', 'Mango','orange','Banana', 'Graph']
arr1.forEach(element => {               // Mehtod -- 2
        console.log(element)
});

let arr2 = [10, 20, 30, 40, 50, 60, 70, 80];
for (let element in arr2) {             // Method --3
        // console.log(element)
        console.log(arr2[element])
}
let arr3 =['apple', 'Mango','orange','Banana', 'Graph']
for (let fruits of arr3) {      // Method -- 4
                console.log(fruits)
        }



