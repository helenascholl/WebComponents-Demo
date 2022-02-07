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

    this.download().then(todos => {
      const ul = document.createElement('ul');

      for (const todo of todos) {
        const li = document.createElement('li');
        const child = document.createElement('todo-component');

        child.setAttribute('todo', JSON.stringify(todo));

        li.appendChild(child);
        ul.appendChild(li);
      }

      this.shadowRoot.appendChild(ul);
    });
  }

}

customElements.define('parent-component', ParentComponent);
