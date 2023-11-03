console.log('ASyncronous ')

// setTimeout(() => {
//         for (let index = 0; index <= 1000; index++){
//                 const element = index;
//                 console.log(index)
//         }
        
// }, 100)

// for (let index = 0; index <= 1000; index++){
//         const element = index;
//         console.log(index)
// }
// setTimeout(function() {
//         for (let j = 0; j <= 222; j++)
//                 console.log(j);

// }, 1000)

function mytimer(array) {
        
        let ind;
        for (ind = 0; ind <= 10000; ind++){
                console.log(ind);
        }
        return array;
}


// console.log("Starting..");
// setTimeout(()=> {
//         console.log(mytimer("Timer set"))
        
// }, 1000)

// // console.log("Done Printing ....")
// let count = 0;

// function greet() {
//         console.log('Hello....')
//         count++
//         console.log('Start counts - ', count)
//         if (count === 5) {
//                 clearInterval(id)
//                 console.log('Endcounts - ', count)
//         }
//         return 0
// }

// // setTimeout(greet, 1000);
// // console.log('Hey')

// let id =setInterval(greet, 1000);
// console.log(id)
// // setInterval(greet, 1000);



// async function f() {
//   let result = 'first!';
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('done!'), 1000);
//   });
//   result = await promise;
//   console.log(result);
// }
// f();

async function hello() {
  try {
    abc;
    return ("Hello")
  } catch (error) {
    return ("Boo! You have a " + error)
  }
}
hello().then(value => console.log(value)).catch(error => console.log(error));