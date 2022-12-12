import './style.css';
import { Project, ToDo } from './classes';
import { format } from 'date-fns';

const projectFormInput = document.querySelector('[data-project-form-input]');
const projectFormDueDate = document.querySelector('[data-project-form-date]')
const projectForm = document.querySelector('[data-project-form]');
const projectCurrent = document.querySelector('[data-current-projects]');
const toDoCont = document.getElementById('todo-cont');
const toDoHeaderTitle = document.querySelector('[data-todo-header-title]');
const toDosCurrent = document.querySelector('[data-current-todos]');
const toDoFormInput = document.querySelector('[data-todo-form-input]');
const toDoFormDueDate = document.querySelector('[data-todo-form-duedate]');
const toDoFormPriority = document.querySelector('[data-todo-form-priority]')
const toDoForm = document.querySelector('[data-new-todo-form]');
const toDoRemoveFinishedBtn = document.querySelector('[data-remove-finished-todos]');
const projectRemoveBtn = document.querySelector('[data-remove-project]');
const toDoTemplate = document.getElementById('todo-template');

const LOCAL_STORAGE_PROJECT_KEY = 'todo.projects';
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'todo.selectedProjectId';

let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY);


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

projectForm.addEventListener('submit', e => {
    e.preventDefault()

    const projName = projectFormInput.value;
    if(projName == null || projName === ''){
        return;
    }
    const newProj = new Project(projName);
    projectFormInput.value = null;
    projects.push(newProj);
    console.log(projects);
    saveAndLoad();
});


toDoForm.addEventListener('submit', e => {
    e.preventDefault();

    let toDoTitle = toDoFormInput.value;
    let toDoDueDate = format(new Date(toDoFormDueDate.value), 'MM/dd/yyyy');
    let toDoPriority = toDoFormPriority.value;
    if(toDoTitle == null || toDoTitle === ''){
        return;
    }
    const newToDo = new ToDo(toDoTitle, toDoDueDate, toDoPriority);
    toDoFormInput.value = null;
    const selectedProject = projects.find(project => project.id === selectedProjectId);
    selectedProject.toDos.push(newToDo);
    saveAndLoad();
    console.log(selectedProject);
})

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
        if(toDo.priority === 'on'){
            label.style.color = 'red';
            toDoElementDueDate.style.color = 'red';
        };
        label.append(toDo.name);
        toDosCurrent.appendChild(toDoElement);
    })
}

const clearElements = (element) => {
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

load();