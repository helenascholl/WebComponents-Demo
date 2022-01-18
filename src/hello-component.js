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

    const div = document.createElement('div');
    div.innerHTML = 'Hello World!';
    this.shadowRoot.appendChild(div);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`attribute ${name} changed to ${newValue}`);
  }

}

customElements.define('hello-component', HelloComponent);
