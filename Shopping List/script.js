let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let list = document.querySelector("ul");
let listElements = document.querySelectorAll("li span");
let deleteButtons = document.querySelectorAll(".delete");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.appendChild(document.createTextNode(input.value + " "));
    span.addEventListener("click", toggleListElementDone);
    li.appendChild(span);
    let deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.addEventListener("click", deleteListElement);
    li.appendChild(deleteButton);
    list.appendChild(li);
    input.value = "";
}

function addToListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addToListAfterKeydown(ev) {
    if (inputLength() > 0 && ev.key === "Enter") {
        createListElement();
    }
}

function deleteListElement(ev) {
    let parent = ev.target.parentElement;
    if (confirm("Do you want to remove this element?")) {
        parent.remove();
    }
}

function toggleListElementDone(ev) {
    ev.target.classList.toggle("done");
}

button.addEventListener("click", addToListAfterClick);

input.addEventListener("keydown", addToListAfterKeydown);

listElements.forEach(function (el) {
    el.addEventListener("click", toggleListElementDone);
});

deleteButtons.forEach(function (el) {
    el.addEventListener("click", deleteListElement);
});