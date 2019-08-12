//console.log("Hi, my name is Nancy and I'm 23.");

function createGreeting(name, age){
    
    const yearOfBirth = 2019 - age;
    return 'Hi my name is ' + name + ' and I was born in ' + yearOfBirth + '!';
}
let nameOne = createGreeting('stew',26);

console.log(nameOne)