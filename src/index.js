import './hello-component.js';

window.addEventListener('DOMContentLoaded', () => {
  let button = document.getElementById('button');
  let main = document.getElementById('main');
  let hello = document.querySelector('hello-component');

  button.addEventListener('click', () => {
    main.innerText = 'Cool content';
    hello.setAttribute('text', 'Hello component!');
  });
});

console.log('loaded');
