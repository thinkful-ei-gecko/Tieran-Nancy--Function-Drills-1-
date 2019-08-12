function jediName(firstName, lastName){
    let jft = firstName.slice(0,2);
    let jlt = lastName.slice(0,3);
  let name = jlt + jft;
  return name;
}

let nameTwo = jediName("Tieran","Dysart");
console.log(nameTwo);

function beyond(num){
    
    if(isFinite(1000 / num) && num > 0){
        console.log("To infinty");
    }
    if(isFinite(1000 / num) && num < 0){
        console.log("To negative infinty");
    }
    if(num === 0){
        console.log("Staying home");
    }
    else{
        
            console.log("And beyond");
    
}
}
 
beyond(0);

function decode(word){
    if(word[0]=== ''){}
    if(word[0]=== ''){}
    if(word[0]=== ''){}
    if(word[0]=== ''){}
}
for loop