class ParentComponent extends HTMLElement {

  static get observedElements() {
    return [];
  }

  constructor() {
    super();
    console.log('HelloComponent constructor');
    this.attachShadow({ mode: 'open' });

    for (let i = 0; i < 3; i++) {
      const child = document.createElement('hello-component');
      child.setAttribute('text', `Button ${i}`);
      this.shadowRoot.appendChild(child);
    }

    this.shadowRoot.addEventListener('button-clicked', e => {
      console.log('button-clicked', e.detail);
    });
  }

}

customElements.define('parent-component', ParentComponent);
