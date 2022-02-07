class TodoComponent extends HTMLElement {

  #todo;

  static get observedAttributes() {
    return [ 'todo' ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const span = document.createElement('span');
    span.innerText = this.#todo.title;
    this.shadowRoot.appendChild(span);

    span.addEventListener('click', () => {
      const event = new CustomEvent('todo-component-clicked', { detail: { todo: this.#todo } });
      this.dispatchEvent(event);
    });
  }

  attributeChangedCallback(name, _, newValue) {
    console.log(`attribute ${name} changed to ${newValue}`);

    switch (name) {
      case 'todo':
        this.#todo = JSON.parse(newValue);
        break;
    }
  }

}

customElements.define('todo-component', TodoComponent);
