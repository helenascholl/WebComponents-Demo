import TodoStore from './todo.store.js';

export default class TodoService {

  baseUrl = 'https://jsonplaceholder.typicode.com/todos';

  store = new TodoStore();

  async fetchTodos() {
    const response = await fetch(this.baseUrl);
    this.store.todos = await response.json();
  }

}
