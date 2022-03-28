import './hello-component.js';
import './parent-component.js';
import './list-component.js';
import './todo-component.js';
import TodoService from './todo.service.js';

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content loaded');
  new TodoService();
});
