class TarjetaPlanTuristico extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const plan = JSON.parse(this.getAttribute('data-plan'));

    this.shadowRoot.innerHTML = `
      <style>
        .tarjeta {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          margin: 10px;
          max-width: 300px;
          background: white;
        }
        .precio {
          font-weight: bold;
          font-size: 1.2em;
          margin: 10px 0;
        }
        </style>
        <div class="tarjeta">
        <h2> </h2>
      </div>
    `;
  }
}

customElements.define('tarjeta-plan-turistico', TarjetaPlanTuristico);
