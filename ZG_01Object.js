let obj = {
        fname: 'Wizard',
        lastname: 'Brew',
        age: 34,
        profile: ['IT Support', 'Server', 'Network', 'Linux', 'Development'],
        exp:[8,6,4,2,1]

}
console.log(obj)
console.log(obj['fname'])
console.log(obj.lastname)
console.log(obj['profile'][2])
console.log(obj.profile[3])
console.log("----===========------")
let obj1 = new Object();
obj1.fname1= 'Wizard';
obj1.lastname1= 'Brew';
obj1.profile1= ['IT Support', 'Server', 'Network', 'Linux', 'Development'];
obj1.age1= 34;
obj1.exp1 = [8, 6, 4, 2, 1];

console.log('Exp= ', obj1.exp1[2])
console.log('Age = ', obj1.age1);

for (let key in obj1) {
        console.log(`The -= ${key}=- is as follows ${obj1[key]}` )
}