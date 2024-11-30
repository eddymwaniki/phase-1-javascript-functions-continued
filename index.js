function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function (visualFlair = '*')
{ return function (message = 'special')
   {return `You are ${visualFlair}${message}${visualFlair}!`}
}