function createGreeting(name, age){
    
    if(name === undefined || age === undefined){
        throw new Error("You're invalid");
    }

    if(typeof age != "number" || typeof name != "string") {
        throw new Error("not a real number or real person");
    }

    const yearOfBirth = 2019 - age;
    return 'Hi my name is ' + name + ' and I was born in ' + yearOfBirth + '!';
}
let nameOne = createGreeting("29", 34);

console.log(nameOne)

function getYearOfBirth(age){

    if(age < 0){
        throw console.error("Age can't be negative");
    }

   
    return 2019 - age;
}

getYearOfBirth(22);