function saturdayFun(summertimeActivity = "roller-skate") {
    return `This Saturday, I want to ${summertimeActivity}!`;
}


function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(visualFlair = "*") {
    return function (adj = "special"){
        return `You are ${visualFlair}${adj}${visualFlair}!`
    }
}


wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"
  