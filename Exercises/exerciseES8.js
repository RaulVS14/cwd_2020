// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'
turtle = turtle.padStart(7);
rabbit = rabbit.padStart(7);
// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

//ANSWER: Replaces spaces with character provided as a second argument

// #3) Get the below object to go from:
let obj = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'
Object.entries(obj).map((ent) => `${ent[0]} ${ent[1]}`).join(" ");
Object.entries(obj).reduce((acc, ent) => `${acc} ${ent[0]} ${ent[1]}`, '');
