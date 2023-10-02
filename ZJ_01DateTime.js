console.log("Date & Time")


let today = new Date();
console.log(today)
let otherDate =  new Date('Aug/10/1990 09:00:09')
console.log(otherDate)

let x = otherDate =  new Date('Aug/10/1990 09:00:09')
console.log(x.getDate())
console.log(x.getDay())
console.log(x.getMonth())
console.log(x.getHours())
console.log(x.getMinutes())
console.log(x.getSeconds())