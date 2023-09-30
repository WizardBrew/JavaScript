let html;
html = "Hey this is my webpage." +
        "This is second line";

html = html.concat("This is third line", " Final Str");
console.log(html);

let lgth = "My String is counting"
console.log(lgth.length);
let Apple = "Apple A DAY "
console.log(Apple.toLowerCase());
console.log(Apple.toUpperCase());
console.log(Apple);     // This is alwasy same the above are just returning
console.log('--====----------====-----')
console.log(html[0])
console.log(html[1])
console.log(html[2]);
console.log(html.indexOf('web'));
console.log(html.lastIndexOf("line"));

console.log('--====----------====-----')
let str = "My Name is Wizard"
console.log(str.charAt(0))
console.log(str.charAt(1))
console.log(str.endsWith('ard'))
console.log(str.includes('is'))
console.log(str.substring(0,7)) // - will return full string.
console.log(str.slice(0, 10))
console.log(str.slice(-6)) // similar to sub but it will give -6 wizard
console.log(str.split(" "));
console.log(str.replace('Name', 'FirstName'));
console.log('--====----------====-----')

let firstname = "Wizard";
let lastname = "Brew";

let Bio = `Hey hi! i am ${firstname} and last name is${lastname}
but ppl say ${'wizard\'s'} fullname is ${ firstname }  ${lastname }  }`
console.log(Bio)