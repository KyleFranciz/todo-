//List all the variable that will be used in this function

//box element that cases everything:
const box = document.getElementById("box");

//center section
const centerSection = document.getElementById("center-section");

//phrase case
const phraseCase = document.getElementById("phrase-case");

//intro phrase
const introPhrase = document.getElementById("intoPhrase");

//UnOrdered list that the tasks will be appended to:

//^ All the functions that were used for the functionality:

//Create function that appends new tasks to a list:
function addTask() {
  //variables that will be used:

  //input box where things are entered
  const inputTask = document.getElementById("input-task");
  //List that stores all the listed items:
  const taskList = document.getElementById("task-list");
  //Create variable for text in the input
  const taskText = inputTask.value.trim();
  //Controls all everything having to do with the selector case
  const selectorCase = document.getElementById('selector-case')
  //Minimum amount
  const minAmount = 0
  
  //TODO: Trial - See if appending li element to listCase solves the problem
  const listCase = document.getElementById('listCase')

  //*SECTION IF THE UL list LENGTH IS OVER 6 ALERT THE USER THAT THEY HAVE TO COMPLISH THEIR OTHER TASKS FIRST:
                //* IF ITS 7+ THEN THE USER CAN CONTINUE ADDING ITEMS TO THE LIST

  if (taskList.getElementsByTagName('li').length >= 7) {
    alert("You have reached the maximum amount of tasks for now")
    return;
  }       

  //Create if statement that detects if the list is greater than 0
  if (taskList.getElementsByTagName('li').length > minAmount) {
    selectorCase.style.display = 'flex';
  } else {
    selectorCase.style.display = 'none'
  }

  //Create alert if left blank:
  if (taskText === "") {
    alert("You forgot to enter a task");
    return;
  }

  //*SECTION THAT GETS RID OFF THE HOVER EFFECTS SO THAT THE ANIMATION STOP PLAYING 
                          //* WHEN AN ELEMENT IS ADDED

  
  //add the box const to the function so that it can be used to change the class for the hover style
  const box = document.getElementById('box')

  //add the non hover class to remove the styles
  box.classList.add('box-non-hover')



  //*SECTION THAT INCREASES THE PADDING ON THE ELEMENT SO THAT THERES SPACE
  //TODO: Figure out the bug when adding new list items 

  //Create center section variable to edit the padding to add more padding on the bottom
  const centerSection = document.getElementById('center-section')

  //get the bottom padding measurement of the centerSection element
  const OriginalBottomPadding = parseInt(window.getComputedStyle(centerSection).paddingBottom);

  //Make a variabel that increases the podding on the bottom each time an element is added:
  const increasedPadding = OriginalBottomPadding + 45

  //apply the increment of the bottom padding
  centerSection.style.paddingBottom = `${increasedPadding}px`

  
  //*SECTION THAT ADDS MARGIN TOP TO THE CENTER SECTION SO THE TASKS DONT OVERFLOW 

  //Get the margin top of the center section 
  const OrginalTop = parseInt(window.getComputedStyle(centerSection).marginTop)

  //combine the margin-top plus the amount I want to add together
  const newTop = OrginalTop - 5

  //make the margin top of the center section style update each button click
  centerSection.style.marginTop = `${newTop}px`

  
  //*SECTION THAT GETS RID OF THE OTHER ELEMENTS SO THAT THE SPACE IS TAKEN UP

  //add introphrase, make it into another id to cancel the space it takes up:
  const introPhrase = document.getElementById('introPhrase');

  //Add class to remove the existing styles on the element:
  introPhrase.classList.remove('intro-phrase')
  introPhrase.classList.add('intro-phrase-regular')

  //add the phrase-case as a variable so that it can be deleted
  const phraseCase = document.getElementById('phrase-case');

  //Add class to remove the existing styles on the element:
  phraseCase.classList.remove('phrase-case')
  phraseCase.classList.add('phrase-case-regular') 


         
  
  //*SECTION THAT CREATES A NEW TASK 
  const newTasks = document.createElement("li");
  
  //Make task equal to what was entered into the input box:
  newTasks.innerHTML = taskText;
  
  //give the element a class ID that adds the style to the new list elements
  newTasks.id = "list-item";
  
  //Append the task to the list
  taskList.appendChild(newTasks);

  //Trial - See if appending the li elements to the listCase solves the spacing problem
  //listCase.appendChild(newTasks)

  //Make the center-section expand by 10px
  
  //After list item is added, clear the list for new tasks:
  inputTask.value = "";
}

//If the elements with-in the taskList is more than 0 then
// remove the animation or change the style so the animations don't play anymore

//List all the variables that ill use in this section:
const taskList = getElementById('task-list')


//?Create MutationObserver function remove the animations from the elements with animations once an item is added:
//const observer = new MutualObserver(() => {
//  //Replace the class of the box to cancel the hover effects when an item is added to a list:
//  box.classList.replace('box','box-non-hover')
//  //Replace the class of the center-section to cancel the hover effects when an item is added to a list:
//  centerSection.classList.replace('center-section', 'center-section-regular')
//});
//
//observer.observe(taskList, {
//  childList: true,
//  subtree: true,
//});
//Create the parameters for the MutationObserver function to operate with using the .observer function:

//Create function that changes the image when the mouse hovers:
function bellHover() {
  const bellIcon = document.getElementById("noti-bell");

  //When mouse hovers over the bell
  bellIcon.addEventListener("mouseover", () => {
    bellIcon.src = "Icons/bell dark.png";
    bellIcon.style.cursor = "pointer";
    bellIcon.style.scale = 1.1;
  });

  //When mouse leaves the bell
  bellIcon.addEventListener("mouseout", () => {
    bellIcon.src = "Icons/bell.png";
    bellIcon.style.scale = 1;
  });
}


