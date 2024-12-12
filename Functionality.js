// Js Code for the Functionality of Todo List

// TODO: Main thing to work on: 
// - Work on the Add items to list function 
// - Word on the Checking Items off the list
// - Make the finished items disappear and move to completed section


//^ Create the variables:

// Since we are working on with the input, the input will be one of the variables:
const inputTask = document.getElementById("input-box");

// Next is the list to access the ul list to use:
const listContainer = document.getElementById('list-container')


//^ Create a functions:
//? Create function for addTask with the button so that I can add the tasks to the list 
function addTask() {
    //if the inputTask value = nothing then alert the user:
    if( inputTask.value === '') {
        alert("Please enter a task to add to the list!")
    } 
    // If the input has something then make sure that the li gets the value from the input to
    // append to the list element 
    else { 
        //make changeable variable, create element li:
        let li = document.createElement('li');

        // innerHtml helps when accessing the text on the inner part of the "li" Element
        li.innerText = inputTask.value; // link the value of whatever is entered into the new html element

        // Add the class 'todo-list' to the li element to get the styles created to be added each time a new element
        // is created
        li.classList.add('todo-list')

        // Make "li" variable to get added underneath the Unordered Lists to be displayed 
        listContainer.appendChild(li);
    }
    
    // Reset the inputTask to clear after each task is added

}


