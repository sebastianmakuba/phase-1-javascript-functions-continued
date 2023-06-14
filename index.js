function saturdayFun (activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()

//Monday work function
function mondayWork (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}
mondayWork()

///wrapAdjective Function
function wrapAdjective (string){
   return function () {
    if (string == '*') {
        return `You are ${string}a hard worker${string}!`
        }
    
    else if (string === '||'){
        return `You are ${string}a dedicated programmer${string}!`
    }
    

    }
}