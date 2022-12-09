import './style.css';
import { Project, ToDo } from './classes';

const projectFormInput = document.querySelector('[data-project-form-input]');
const projectFormAdd = document.querySelector('[data-project-form-add]');
const projectCurrent = document.querySelector('[data-current-projects]');
// const projectMenuItem = document.querySelector('[data-project-menu-item]');
const toDoHeaderTitle = document.querySelector('[data-todo-header-title]');
const toDosRemaining = document.querySelector('[data-todos-remaining]');
const toDosCurrent = document.querySelector('[data-current-todos]');
const toDoFormInput = document.querySelector('[data-todo-form-input]');
const toDoFormAdd = document.querySelector('[data-todo-form-input]');
const toDoRemoveFinishedBtn = document.querySelector('[data-remove-finished-todos]');
const projectRemoveBtn = document.querySelector('[data-remove-project]');

const LOCAL_STORAGE_PROJECT_KEY = 'todo.projects';
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'todo.selectedProjectId';

let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
// let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY);

projectFormAdd.addEventListener('click', e => {
    e.preventDefault()

    const projName = projectFormInput.value;
    if(projName == nul || projName === ''){
        return;
    }
    const newProj = new Project(projName);
    projectFormInput.value = null;
    projects.push(newProj);
    console.log(projects);
    save();
    render();
});

projectCurrent.addEventListener('click', e => {
    toDoHeaderTitle.innerText = `${projMenu.innerText}`;
})

const render = () => {
    clearElements(projectCurrent);
    projects.forEach(project => {
        let projMenu = document.createElement('li');
        projMenu.dataset.projectId = project.id;
        projMenu.classList.add('project-menu-item');
        projMenu.innerText = project.name;
        projectCurrent.append(projMenu);
    })
}

const save = () => {
    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects));
    // localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY, selectedProjectId);
};

const clearElements = (element) => {
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

render();