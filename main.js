const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const clearAllBtn = document.querySelector("#clear-all-btn");

let oldInputValue;

// Display current date
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
document.getElementById("date").innerHTML = today.toDateString();

// Function to display and update time
function time() {
    const data = new Date();
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();

    h = padZero(h);
    m = padZero(m);
    s = padZero(s);

    document.getElementById("hour").innerHTML = `${h}:${m}:${s}`;
    setTimeout(time, 1000); // Update every second
}

// Pad numbers less than 10 with a leading zero
function padZero(num) {
    return num < 10 ? '0' + num : num;
}

// Save a new todo
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
   
});