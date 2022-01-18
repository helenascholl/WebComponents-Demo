class HelloComponent extends HTMLElement{

  constructor() {
    super();
    console.log('HelloComponent constructor');
  }

}

customElements.define('hello-component', HelloComponent);
