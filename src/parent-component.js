class ParentComponent extends HTMLElement {

  static get observedElements() {
    return [];
  }

  constructor() {
    super();
    console.log('HelloComponent constructor');
    this.attachShadow({ mode: 'open' });
  }

}

customElements.define('parent-component', ParentComponent);
