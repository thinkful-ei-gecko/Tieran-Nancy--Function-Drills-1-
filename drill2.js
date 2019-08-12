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
    
    if(word[0]=== 'a'){
        return word[2]
    }
     else if(word[0]=== 'b'){
        return word[3]
    }
    else if(word[0]=== 'c'){
        return word[4]
    }
    else if(word[0]=== 'd'){
        return word[5]
    }
    else{
        return '';
    }
}


function inMonth(month,leapYear){
    switch(month){
        case 'februray':
            return leapYear ? `${month} has 29 days` : `${month} has 28 days`;
            break;
            case 'april':
            case 'june':
            case 'september':
            case 'november':
                return `${month} has 30 days`;
                break;
            default:
                return `${month} has 31 days`;
    }
}

console.log(inMonth('februray',true))


function RPS(num){
    // 1 scissors
    // 2 rock
    // 3 paper
   if(num < 1 || num > 3){
       throw error("Please pick numbers 1-3 only")
   }
   const randomNum = Math.floor(Math.random()* 3) + 1
   if(randomNum === num){
       return "TIE";
   }
   else if ((num === 1 && randomNum === 3)|| (num === 3 && randomNum === 1)){
       return "scissors beats paper";
   }
   else if ((num === 2 && randomNum === 3)|| (num === 3 && randomNum === 2)){
    return "paper beats rock";
}
    else if ((num === 2 && randomNum === 1)|| (num === 1 && randomNum === 2)){
    return "rock beats scissors";
}

    
}

console.log(RPS(3));