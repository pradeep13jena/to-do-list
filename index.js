let count = true
const taskadded = document.querySelector('#input-task')
const button = document.querySelector('#button')
const taskContainer = document.querySelector('.task-container')
button.addEventListener("click", addTasks);

function addTasks(){

    // Element Creation
    const taskDIV = document.createElement('div');
    const taskParagraph = document.createElement('p');
    const iconDiv = document.createElement('div');
    const completeButton = document.createElement('button')
    const deleteButton = document.createElement('button')

    // Content Assinging for buttons to hold the correct items
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    deleteButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>'

    // Class Assinging to the element for Proper CSS
    taskDIV.classList.add('taskDIV')
    taskParagraph.classList.add('taskParagraph')
    iconDiv.classList.add('iconDiv')
    completeButton.classList.add('completeButton')
    deleteButton.classList.add('deleteButton')

    // Appending element to their proper Parent
    iconDiv.appendChild(completeButton)
    iconDiv.appendChild(deleteButton)
    taskParagraph.innerHTML = taskadded.value
    taskDIV.appendChild(taskParagraph)
    taskDIV.appendChild(iconDiv)

    if (taskadded.value == "") {
        return alert('Add something to task..')
    }

    taskContainer.appendChild(taskDIV)
    taskadded.value = ""

    localStorage.setItem('taskDetails', taskContainer.innerHTML)

}

taskContainer.addEventListener('click', ButtonForDelete);

function ButtonForDelete(event){
    const item = event.target

    if (item.classList[0] === "fa-regular" ) {
        grandParent = item.parentElement.parentElement.parentElement
        grandParent.remove()
    } else if (item.classList[0] === "fa-solid") {
        mainPara = item.parentElement.parentElement.previousSibling;
        if (count === true){
            mainPara.classList.remove("taskParagraph");
            mainPara.classList.add('taskParagraph-stroke')
            count = false
        }
        else{
            mainPara.classList.remove("taskParagraph-stroke");
            mainPara.classList.add('taskParagraph')
            count = true
        }
    }

    localStorage.setItem('taskDetails', taskContainer.innerHTML)
}

function restoreElement(){
    savedValue = localStorage.getItem('taskDetails')
    taskContainer.innerHTML = savedValue
}

window.onload = restoreElement
