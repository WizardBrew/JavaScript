console.log("functions")

function greet(Uname, grtend = "Thanks") {
        console.log(`Hi!!, ${Uname}   ${grtend}`)
}

let myname = "wizard";
let lname = "Brew";

greet(myname)

function welcome(fname, bye = 'Visit again') {
        console.log("Hi!!", fname);
        let msg = `How are you you have been working good in Org \njust to let you know ${fname} we are putting you in dev team
        congrats all the best ${bye}`
        return msg
}

// let attribs  = welcome('Wiz')        // assign and call 
// console.log(attribs)
console.log(welcome(myname)) // direct call not recommended

function car(cname, cmodel) {
        
        console.log("Hey this is amazing ", cname, " this was developed in year",cmodel)

}

car('Maruti', '2000')
