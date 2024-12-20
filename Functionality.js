//ADD Functionality for the add task input section

//Variables that will be used and some examples:
//const mainPage = document.getElementsByClassName('main-page')

const centerBox = document.getElementById('center-section')

const introPhrase = document.getElementById('introPhrase')



//Create a function that makes the intro phrase invisible when the mouse is not on the centerBox
function revealWord() {
    introPhrase.classList.add('intro-phrase')
}

function hideWord() {
    introPhrase.classList.remove('intro-phrase') 
}

centerBox.addEventListener('mouseover', revealWord)
centerBox.addEventListener('mouseout', hideWord)
//Create a function that removes an id when the input is selected:
//function resetBox() {
    //changes the id to another style I made that is identical but without the hover
    //centerBox.id = 'center-section-regular'
//}


//Create a function that activates when mouse hovers over the center box:

//centerBox.addEventListener('mouseenter', () => {
    //expands the padding on the bottom by 90px
    //centerBox.style.paddingBottom = '90px'
    
//}) 


// Situational Variables
//? NOTE: clickedAlready is used as a flag to check once a task is complete, so that a function
//?         stops iterating over and over.
//var PhraseShown = false


//Create a function that expands the height of the box a certain amount when the box is clicked:
//function expandCenterBox() {
    //set the padding bottom style to 90px
    //centerBox.style.paddingBottom = '90px';
//}

//Create a function to add a h2 tittle to the center section:
//function createIntroPhrase() {
    //if (!PhraseShown) {
         //create a variable for the intro phrase
        //const introPhrase = document.createElement('h2')

        //define the text within the intro phrase:
        //introPhrase.textContent = "Let's Add Some Tasks"

        //add a class to the phrase to help give it some style
        //introPhrase.classList.add('intro-phrase')

        //append the introPhrase to the centerBox:
        //* centerBox.appendChild(introPhrase)

        


    //}
    
//}


//Create an if statement:
// If the input is selected then expand the center-box height:
//? NOTE: addEventListener(event(click, input, change, useCapture))
//inputTask.addEventListener('click', function() {
    //expand the center box function:
    //expandCenterBox();
    //create the intro phrase after the initial activation:
    //createIntroPhrase();
    
//});
