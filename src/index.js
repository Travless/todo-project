import './style.css';
import { Project, ToDo } from './classes';

const projectFormInput = document.querySelector('[data-project-form-input]');
const projectFormAdd = document.querySelector('[data-project-form-add]');
const projectCurrent = document.querySelector('[data-current-projects]');
const toDoHeaderTitle = document.querySelector('[data-todo-header-title]');
const toDosRemaining = document.querySelector('[data-todos-remaining]');
const toDosCurrent = document.querySelector('[data-current-todos]');
const toDoFormInput = document.querySelector('[data-todo-form-input]');
const toDoFormAdd = document.querySelector('[data-todo-form-input]');
const toDoRemoveFinishedBtn = document.querySelector('[data-remove-finished-todos]');
const projectRemoveBtn = document.querySelector('[data-remove-project]');

let projects = [];

projectFormAdd.addEventListener('click', e => {
    e.preventDefault()

    const newProj = new Project(projectFormInput.value);
    projectFormInput.value = null;
    projects.push(newProj);
    console.log(projects);
})