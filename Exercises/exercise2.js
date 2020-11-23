//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

let experiencePoints = winBattle() ? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
console.log(undefined === moveCommand("forward"));
//#3 return value when moveCommand("back");
console.log("you arrived home" === moveCommand("back"));
//#4 return value when moveCommand("right");
console.log("you found a river" === moveCommand("right"));
//#5 return value when moveCommand("left");
console.log(undefined === moveCommand("left"));

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!
function whatWeekDayNameIsIt(number) {
    var day;
    switch (number) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "Please enter valid weekday number";
    }
    return day;
}

console.log(`It's ${whatWeekDayNameIsIt(5)} !`);