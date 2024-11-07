// AlokaiCheckoutWebComponent.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import AlokaiCheckout from 'alokai-checkout-component';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a description for product 1',
    price: 20,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is a description for product 2',
    price: 80,
    image: 'https://via.placeholder.com/150',
  },
  // Add more products here
];

class AlokaiCheckoutWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.shadowRoot.appendChild(mountPoint);

    // Create a root and render the React component
    const root = ReactDOM.createRoot(mountPoint);
    root.render(<AlokaiCheckout products={products} />);
  }

  disconnectedCallback() {
    // Clean up when the component is removed from the DOM
    ReactDOM.unmountComponentAtNode(this.shadowRoot);
  }
}

customElements.define('alokai-checkout-web-component', AlokaiCheckoutWebComponent);

export default AlokaiCheckoutWebComponent;
