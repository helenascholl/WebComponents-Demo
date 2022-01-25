class HelloComponent extends HTMLElement {

  static get observedAttributes() {
    return [ 'text' ];
  }

  constructor() {
    super();
    console.log('HelloComponent constructor');
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    console.log('connected');

    const button = document.createElement('button');
    button.innerText = 'Click me';
    this.shadowRoot.appendChild(button);

    button.addEventListener('click', () => {
      console.log('i was clicked');
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`attribute ${name} changed to ${newValue}`);
  }

}

customElements.define('hello-component', HelloComponent);
