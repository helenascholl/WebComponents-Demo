import TodoService from './todo.service.js';

const url = 'https://jsonplaceholder.typicode.com/todos';

class ParentComponent extends HTMLElement {

  static get observedElements() {
    return [];
  }

  async download() {
    const response = await fetch(url);
    return await response.json();
  }

  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    this.createDetailView();

    const todoService = new TodoService();

    todoService.fetchTodos()
      .then(_ => {
        todoService.store.todos
          .subscribe(todos => {
            const ul = document.createElement('ul');

            for (const todo of todos) {
              const li = document.createElement('li');
              const child = document.createElement('todo-component');

              child.setAttribute('todo', JSON.stringify(todo));
              child.addEventListener('todo-component-clicked', e => {
                this.shadowRoot.getElementById('todo-id').innerText = e.detail.todo.id;
                this.shadowRoot.getElementById('todo-title').innerText = e.detail.todo.title;
                this.shadowRoot.getElementById('todo-completed').innerText = e.detail.todo.completed;
              });

              li.appendChild(child);
              ul.appendChild(li);
            }

            this.shadowRoot.appendChild(ul);
          });
      });
  }

  createDetailView() {
    const detailView = document.createElement('div');

    detailView.innerHTML = `
    <div>
      <span>ID: </span><span id="todo-id"></span>
    </div>
    <div>
      <span>Title: </span><span id="todo-title"></span>
    </div>
    <div>
      <span>Completed: </span><span id="todo-completed"></span>
    </div>
`;

    this.shadowRoot.appendChild(detailView);
  }

}

customElements.define('parent-component', ParentComponent);
