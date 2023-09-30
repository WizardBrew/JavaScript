console.log("Variables")

const fname = "Parvez"
var lastname;
lastname = "Mustak";
var age = 34
// var age = '34dsdkla'
console.log(fname, lastname)
const fclass = "Human";
// fclass = Animal      // This cannot be done;

let city = "Belgaum";
{
        let city = "Bgm";
        console.log(city);      // for this block city is bgm
}
console.log(city);              // let always take scope over the blocks
