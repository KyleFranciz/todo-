// Js Code for the Functionality of Todo List

// TODO: Main thing to work on: 
// - Work on the Add items to list function 
// - Word on the Checking Items off the list
// - Make the finished items disappear and move to completed section


// The following code is useful for loading the JS functions into the page before the page loads 
 document.addEventListener('DOMContentLoaded', () => { // This part of the code is used for loading the script page before the rest of the other elements load.

    // List all of the core elements that I'll use from html and change them into JS variable:
    // The reason why all of these are const, is because it will be constantly accessed through the 

    // Add 'todo-form' add the parenthesis to be targeted and stored as a const variable
    // Has do with controlling all the elements with in the un-ordered lit
    const todoForm = document.getElementById('todo-form') // enter name of the id, that I want to use in the function 
    
    // Add 'input' as a JS variable to be used used in the project, since input is going to be essential to creating a new list element
    const input = document.getElementById('input') // Store the input as a variable

    // Add unordered list as another constant since the regular list is going to be added with in the Ul
    const todoList = document.getElementById('todo-list')


    // Create a function that will avoid refreshing the page
    todoForm.addEventListener('submit', function(event) {
        event.preventDefault() //This function stops the page from reloading whenever the submit button is pressed 

        //If There is no text entered, make an alert to let the user know to enter a task


        //NOTE: When dealing with the value variable to 
        // Get the value of whatever is typed in the input and clear the extra the white spaces with in the round
    })


 });
//? Declare the variables to use for this javascript feature: