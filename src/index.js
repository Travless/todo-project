import './style.css';
import { Project, ToDo } from './classes';
import { format, isThisWeek, isThisMonth, parseISO } from 'date-fns';

//  Project QSs
const projectNewProjBtn = document.querySelector('[data-project-new]');
const projectFormInput = document.querySelector('[data-project-form-input]');
const projectForm = document.querySelector('[data-project-form]');
const projectCurrent = document.querySelector('[data-current-projects]');

// To DO QSs
const toDoCont = document.getElementById('todo-cont');
const toDoHeaderTitle = document.querySelector('[data-todo-header-title]');
const toDosCurrent = document.querySelector('[data-current-todos]');
const toDoFormInput = document.querySelector('[data-todo-form-input]');
const toDoFormDueDate = document.querySelector('[data-todo-form-duedate]');
const toDoFormPriority = document.querySelector('[data-todo-form-priority]');
const toDoForm = document.querySelector('[data-new-todo-form]');
const toDoAdd = document.querySelector('[data-add-todo-btn]');
const toDoCreate = document.querySelector('[data-todo-form-create]');
const toDoLayoutProj = document.getElementById('project-layout')
const toDosDateCurrent = document.querySelector('[data-current-date-todos]');


// // Date Sort QSs
const toDoDateToday = document.querySelector('[data-todos-today]');
const toDoDateThisWeek = document.querySelector('[data-todos-this-week]');
const toDoDateThisMonth = document.querySelector('[data-todos-this-month]');

// Delete Butttons QSs
const toDoRemoveFinishedBtn = document.querySelector('[data-remove-finished-todos]');
const projectRemoveBtn = document.querySelector('[data-remove-project]');

// To Do Templates
const toDoTemplate = document.getElementById('todo-template');
const toDoDateTemplate = document.getElementById('todo-date-template');


const LOCAL_STORAGE_PROJECT_KEY = 'todo.projects';
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'todo.selectedProjectId';

let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY);

// Current Project and To Dos Event Listeners

projectCurrent.addEventListener('click', e => {
    toDosDateCurrent.innerHTML = '';
    toDosDateCurrent.hidden = true;
    // toDosDateCurrentCont.hidden = true;
    toDosCurrent.hidden = false;
    toDoRemoveFinishedBtn.hidden = false;
    projectRemoveBtn.hidden = false;
    toDoLayoutProj.hidden = true;
    if(e.target.tagName.toLowerCase() === 'li'){
        selectedProjectId = e.target.dataset.projectId;
        saveAndLoad();
    }
})

toDosCurrent.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase() === 'input'){
        const selectedProject = projects.find(project => project.id === selectedProjectId);
        const selectedToDo = selectedProject.toDos.find(toDo => toDo.id === e.target.id);
        console.log(selectedToDo);
        selectedToDo.complete = e.target.checked;
        save();
    }
})

projectNewProjBtn.addEventListener('click', e => {
    projectForm.hidden = false;
})

// Form Event Listeners

projectForm.addEventListener('submit', e => {
    e.preventDefault()

    const projName = projectFormInput.value;
    if(projName == null || projName === ''){
        return;
    }
    const newProj = new Project(projName);
    projectFormInput.value = null;
    projects.push(newProj);
    projectForm.hidden = true;
    saveAndLoad();
});

toDoAdd.addEventListener('click', e => {
    toDoForm.hidden = false;
    toDoCreate.hidden = false;
    toDoAdd.hidden = true;
})

toDoForm.addEventListener('submit', e => {
    e.preventDefault();

    const selectedProject = projects.find(project => project.id === selectedProjectId);
    const projName = selectedProject.name;
    let toDoTitle = toDoFormInput.value;
    let toDoDueDate = format(new Date(toDoFormDueDate.value), 'MM/dd/yyyy');
    let toDoPriority = toDoFormPriority.checked;
    if(toDoTitle == null || toDoTitle === ''){
        return;
    }
    const newToDo = new ToDo(toDoTitle, toDoDueDate, toDoPriority, projName);
    toDoFormInput.value = null;
    selectedProject.toDos.push(newToDo);
    toDoForm.hidden = true;
    toDoAdd.hidden = false;
    saveAndLoad();
})

// Date To Do Sort Event Listeners

toDoDateToday.addEventListener('click', e => {
    toDosDateCurrent.innerHTML = '';
    toDosCurrent.innerHTML = '';
    console.log(toDosDateCurrent);
    toDosDateCurrent.hidden = false;
    toDosCurrent.hidden = true;
    hideButtonUI();
    toDoLayoutProj.hidden = false;
    toDoHeaderTitle.innerText = toDoDateToday.innerText;
    if (toDoHeaderTitle.innerText = toDoDateToday.innerText){
        toDoDateToday.classList.add('selected-project');
        // classCheck(toDoDateToday);
    }
    console.log(toDoDateToday.classList.contains('selected-project'));
    const projItems = document.getElementsByClassName('project-menu-item');
    console.log(projItems);
    const toDosCont = []
    const todayToDos = []
    const currentDate = format(new Date(), 'MM/dd/yyyy');
    projects.forEach(project => {
        toDosCont.push(project.toDos);
    })
    const currentToDos = toDosCont.flat();
    currentToDos.forEach(toDo => {
        if(currentDate === toDo.dueDate){
            todayToDos.push(toDo);
        }
    })
    loadToDosByDate(todayToDos);
    
});

toDoDateThisWeek.addEventListener('click', e => {
    toDosDateCurrent.hidden = false;
    toDosCurrent.hidden = true;
    toDosCurrent.innerHTML = '';
    toDosDateCurrent.innerHTML = '';
    toDoLayoutProj.hidden = false;
    toDoHeaderTitle.innerText = toDoDateThisWeek.innerText;
    const toDosCont = []
    const thisWeekToDos = []
    // const currentDate = format(new Date(), 'MM/dd/yyyy');
    projects.forEach(project => {
        toDosCont.push(project.toDos);
    })
    const currentToDos = toDosCont.flat();
    // console.log(isThisWeek(parseISO(currentToDos[1].dueDate)));
    currentToDos.forEach(toDo => {
        if(isThisWeek(new Date(toDo.dueDate)) === true){
            thisWeekToDos.push(toDo);
        }
    })
    loadToDosByDate(thisWeekToDos);
});

toDoDateThisMonth.addEventListener('click', e => {
    toDosDateCurrent.hidden = false;
    toDosCurrent.hidden = true;
    toDosCurrent.innerHTML = '';
    toDosDateCurrent.innerHTML = '';
    toDoLayoutProj.hidden = false;
    toDoHeaderTitle.innerText = toDoDateThisMonth.innerText;
    const toDosCont = []
    const thisMonthToDos = []
    projects.forEach(project => {
        toDosCont.push(project.toDos);
    })
    const currentToDos = toDosCont.flat();
    currentToDos.forEach(toDo => {
        if(isThisMonth(new Date(toDo.dueDate)) === true){
            thisMonthToDos.push(toDo);
        }
    })
    loadToDosByDate(thisMonthToDos);
})

// Delete Buttons Event Listeners

toDoRemoveFinishedBtn.addEventListener('click', e => {
    const selectedProject = projects.find(project => project.id === selectedProjectId);
    selectedProject.toDos = selectedProject.toDos.filter(toDo => !toDo.complete);
    saveAndLoad();
})

projectRemoveBtn.addEventListener('click', e => {
    projects = projects.filter(list => list.id !== selectedProjectId);
    selectedProjectId = null;
    saveAndLoad();
})


// Functions

const saveAndLoad = () => {
    save();
    load();
}

const save = () => {
    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY, selectedProjectId);
};

const load = () => {
    clearElements(projectCurrent);
    loadProjects();
    let selectedProject = projects.find(project => project.id === selectedProjectId);
    if (selectedProjectId == null){
        toDoCont.style.display = 'none';
    } else {  
        toDoCont.style.display = '';
        toDoHeaderTitle.innerText = selectedProject.name;
        clearElements(toDosCurrent);
        loadToDo(selectedProject);
    }

}

const loadProjects = () => {
    projects.forEach(project => {
        let projMenu = document.createElement('li');
        projMenu.dataset.projectId = project.id;
        projMenu.classList.add('project-menu-item');
        projMenu.innerText = project.name;
        if(project.id === selectedProjectId){
            projMenu.classList.add('selected-project');
        };
        projectCurrent.append(projMenu);
    })
}

const loadToDo = (selectedProject) => {
    selectedProject.toDos.forEach(toDo => {
        const toDoElement = document.importNode(toDoTemplate.content, true);
        const checkbox = toDoElement.querySelector('[data-todo-checkbox]');
        const toDoElementDueDate = toDoElement.querySelector('[data-todo-date]');
        // const toDoElementPriority = toDoElement.querySelector('[data-todo-priority]');
        toDoElementDueDate.id = toDo.id;
        toDoElementDueDate.innerText = toDo.dueDate;
        checkbox.id = toDo.id;
        checkbox.checked = toDo.complete;
        const label = toDoElement.querySelector('label');
        label.htmlFor = toDo.id;
        if(toDo.priority === true){
            label.style.color = 'red';
            toDoElementDueDate.style.color = 'red';
        };
        label.append(toDo.name);
        toDosCurrent.appendChild(toDoElement);
    })
}

const loadToDosByDate = (toDos) => {
    toDos.forEach(toDo => {
        const toDoDateElement = document.importNode(toDoDateTemplate.content, true);
        const dateCheckbox = toDoDateElement.querySelector('[data-date-todo-checkbox]');
        const toDoDateElementDueDate = toDoDateElement.querySelector('[data-date-todo-date]');
        const toDoDateElementProject = toDoDateElement.querySelector('[data-date-todo-project]');
        toDoDateElementDueDate.id = toDo.id;
        toDoDateElementDueDate.innerText = toDo.dueDate;
        dateCheckbox.id = toDo.id;
        dateCheckbox.checked = toDo.complete;
        const dateLabel = toDoDateElement.querySelector('label');
        dateLabel.htmlFor = toDo.id;
        toDoDateElementProject.innerText = toDo.parent;
        if(toDo.priority === true){
            dateLabel.style.color = 'red';
            toDoDateElementDueDate.style.color = 'red';
            toDoDateElementProject.style.color = 'red';
        }
        dateLabel.append(toDo.name);
        toDosDateCurrent.appendChild(toDoDateElement);
        dateCheckbox.addEventListener('click', e => {
            toDoRemoveFinishedBtn.hidden = false;
            toDoRemoveFinishedBtn.addEventListener('click', e => {
                const selectedProject = projects.find(project => project.id === selectedProjectId);
                selectedProject.toDos = selectedProject.toDos.filter(toDo => !toDo.complete);
                saveAndLoad();
            })
        })
    })
}



const clearElements = (element) => {
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

const hideButtonUI = () => {
    toDoRemoveFinishedBtn.hidden = true;
    projectRemoveBtn.hidden = true;
    toDoForm.hidden = true;
}

const classCheck = (element) => {
    if (element.classList.contains('selected-project') === true){
        projMenu.classList.remove('selected-project');
    }
}

load();