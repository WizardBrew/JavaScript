console.log("Condition Expressions");

// let age = prompt("Enter the age");
// age = Number.parseInt(age);
age = 20
if (age < 18) {
        console.log("Your are not allowed to for a license");
}
else {
        console.log("Your are valid to have License")
}

let score = 90;
                        //      if chain keep evaluating all if's
if (score !== 91) {             // else if terminate if meets condition
        console.log("Not scored exact 90")
}
if (score != '91') {
        console.log("Not a scored exact 90")
}
if (score ==90) {
        console.log("You Have a scored exact 90");
}
else if (score == '92') {
        console.log("You a scored exact 90")
}
else {
        console.log(" Not scored exact 90-==")
}