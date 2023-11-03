console.log('First Class Object \n----------------') // Any function is passwed as Argument in form of variable 

// function hello() {
//         return 'Hello '
// }
// function greeting(hey, greet) {
//         console.log(hey()+ greet)
// }

// greeting(hello, 'How are you')

function name() {
        return 'Whats Your Name : '
}
function sums(a) {
        console.log( a()+b)
        console.log( a+'How are you')                // its returning a func if awihtout a() 
}

sums(name, 'i am Wizard ')
sums(name)

