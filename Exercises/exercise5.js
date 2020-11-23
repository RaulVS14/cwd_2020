// Complete the below questions using this array:
const array = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let array_new = [];
array.forEach(function (user) {
    array_new.push(`${user.username}!`);
});
console.log(array_new);

//Create an array using map that has all the usernames with a "? to each of the usernames
let mapped_array = array.map(user => `${user.username}?`);
console.log(mapped_array);

//Filter the array to only include users who are on team: red
let filtered_array = array.filter(el => el.team === "red");
console.log(filtered_array);

//Find out the total score of all users using reduce
let reduced_array = array.reduce((acc, el) => el.score + acc, 0);
console.log(reduced_array);

// (1), what is the value of i? Index of the array elements
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num) => num * 2);
console.log(newArray);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const updateItemsList = array.map(user => user.items.map((item) => `${item}!`));
console.log(updateItemsList);

// LESSON: to retrieve variable you can use deconstruct for the object let {username} = user;