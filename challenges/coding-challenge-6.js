/*
* Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
* make a function that organizes these into individual array that is ordered.
* For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
* Bonus: Make it so it organizes strings differently from number types.
* i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
* */
const inputArray = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const textNumberArray = [1, "2", "3", 2];
const testInputArray = [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591];
const testTextNumberArray = [[1, 2], ["2", "3"]];

function answer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i) {
            let currentElement = arr[i];
            if (newArray.length === 0) {
                newArray.push(currentElement);
            } else {
                let currentNewArrayElement = newArray[j];
                for (let j = 0; j < newArray.length; j++) {
                    if (newArray[j] === currentElement) {
                        newArray[j] = [currentNewArrayElement, currentElement];
                    } else {
                        if (Array.isArray(currentNewArrayElement)) {
                            if (newArray[j] === currentNewArrayElement[0]) {
                                newArray[j].push(currentElement)
                            }
                        } else {
                            
                        }
                    }
                }
            }
        }
    }
    return arr;
}

console.log(answer(inputArray) === testInputArray)
console.log(answer(textNumberArray) === testTextNumberArray)

/*
* Write a javascript function that takes an array of numbers and a target number.
* The function should find two different numbers in the array that, when added together,
* give the target number. For example: answer([1,2,3], 4)should return [1,3]
* */
const testAddArray = [1, 3];

function answer2() {

}

console.log(answer2([1, 2, 3], 4) === testAddArray);

/*
* Write a function that converts HEX to RGB.
* Then Make that function auto-detect the formats so that
* if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
* */
function answer3() {

}

console.log(answer3("#000000") === "rgb(0,0,0)");