//List all the variable that will be used in this function

//box element that cases everything:
const box = document.getElementsByClassName('box')

//input box

//center section
const centerSection = document.getElementById('center-section')

//phrase case
const phraseCase = document.getElementById('phrase-case')

//intro phrase
const introPhrase = document.getElementById('intoPhrase')

//UnOrdered list that the tasks will be appended to:


//^ All the functions that were used for the functionality:

//Create function that appends new tasks to a list:
function addTask() {
    //variables that will be used:
    
    //input box where things are entered
    const inputTask = document.getElementById('input-task')
    //List that stores all the listed items:
    const taskList = document.getElementById('task-list')
    //Create variable for text in the input
    const taskText = inputTask.value.trim()


    //Create alert if left blank:
    if (taskText === '') {
        alert('You forgot to enter a task');
        return;
    }
    
    //Create new task
    const newTasks = document.createElement('li')
    
    //Make task equal to what was entered into the input box:
    newTasks.innerHTML = taskText
    
    //give the element a class ID that adds the style to the new list elements
    newTasks.classList.add('list-item')

    //Append the task to the list
    taskList.appendChild(newTasks)

    //After list item is added, clear the list for new tasks:
    inputTask.value = ''
} 

//If the elements with-in the taskList is more than 0 then
// remove the animation or change the style so the animations don't play anymore
if (taskList.length > 0) {

}


//Create function that changes the image when the mouse hovers:
function bellHover() {
    const bellIcon = document.getElementById('noti-bell');

    //When mouse hovers over the bell
    bellIcon.addEventListener('mouseover', () => {
        bellIcon.src = 'bell.png';
        bellIcon.style.cursor = 'pointer';
    });

    //When mouse leaves the bell
    bellIcon.addEventListener('mouseout', () => {
        bellIcon.src = 'bell dark.png';
    });
}