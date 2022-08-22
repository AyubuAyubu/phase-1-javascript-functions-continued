// code your solution here
function saturdayFun(defaultActivity = 'roller-skate') {
    return `This Saturday, I want to ${defaultActivity}!`
  }
  
  let mondayWork = function (defaultActivity = 'go to the office') {
    return `This Monday, I will ${defaultActivity}.`
  }
  
  let wrapAdjective = function (visualFlairString = '*') {
    return function (adjective = 'special') {
      return `You are ${visualFlairString}${adjective}${visualFlairString}!`
    }
  }
  
 
  
  