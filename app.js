//Define UI variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')


// load all event listeners
loadEventListeners();

function loadEventListeners(){
    form.addEventListener('submit', addTask);
}

//adding a task, if nothing is present give an alert
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a Task')
    }
    //create list element
    const li = document.createElement('li');
    // give list element a class
    li.className = 'collection-item';
    // create text in the list item and append to li
    li.appendChild(document.createTextNode(taskInput.value))
    // Create new link element (X next to list item for deletion)
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-check"></i>'
    //append link to the li
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li)

    e.preventDefault()
}



