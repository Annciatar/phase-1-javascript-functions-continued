// code your solution here
function saturdayFun(activity  = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(toDo = "go to the office") {
    return `This Monday, I will ${toDo}.`;
}
function wrapAdjective(wrap = '*' ){
    return function (emphatic = 'a hard worker'){
        return `You are ${wrap}${emphatic}${wrap}!`;
    };
   
}