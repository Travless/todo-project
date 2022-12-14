import './style.css';
import { Project, ToDo } from './classes';
import { format, isToday, isThisWeek, parseISO } from 'date-fns';

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
    console.log(projects);
    saveAndLoad();
});

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
    saveAndLoad();
})

// Date To Do Sort Event Listeners

toDoDateToday.addEventListener('click', e => {
    toDosCurrent.innerHTML = '';
    toDoHeaderTitle.innerText = toDoDateToday.innerText;
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
    console.log(projects)
    
});

toDoDateThisWeek.addEventListener('click', e => {
    toDosCurrent.innerHTML = '';
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
    // console.log(thisWeekToDos);
    loadToDosByDate(thisWeekToDos);
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
        const idValue = toDo.id;
        toDoDateElementDueDate.id = toDo.id;
        toDoDateElementDueDate.innerText = toDo.dueDate;
        dateCheckbox.id = toDo.id;
        dateCheckbox.checked = toDo.complete;
        const dateLabel = toDoDateElement.querySelector('label');
        dateLabel.htmlFor = toDo.id;
        const projName = projects.forEach(project => {
            if (project.id === idValue){
                return project.name;
            }
        })
        if(toDo.priority === true){
            dateLabel.style.color = 'red';
            toDoDateElementDueDate.style.color = 'red';
            toDoDateElementProject.style.color = 'red';
        }
        dateLabel.append(toDo.name);
        toDosCurrent.appendChild(toDoDateElement);
        console.log(projName);
    })
}



const clearElements = (element) => {
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

// const filterToday = (toDos) => {
//     let currentDate = format(new Date(), 'MM/dd/yyyy');
//     return toDos.dueDate === currentDate;
// }

load();