class ParentComponent extends HTMLElement {

  static get observedElements() {
    return [];
  }

  constructor() {
    super();
    console.log('HelloComponent constructor');
    this.attachShadow({ mode: 'open' });

    const ul = document.createElement('ul');
    this.shadowRoot.appendChild(ul);

    for (let i = 0; i < 3; i++) {
      const child = document.createElement('list-component');
      const li = document.createElement('li');

      child.setAttribute('text', `List item ${i}`);
      child.addEventListener('list-item-clicked', e => {
        console.log('list-item-clicked', e.detail.text, this);
        document.getElementById('main').innerText = `${e.detail.text} clicked`;
      });

      li.appendChild(child);
      ul.appendChild(li);
    }
  }

}

customElements.define('parent-component', ParentComponent);
