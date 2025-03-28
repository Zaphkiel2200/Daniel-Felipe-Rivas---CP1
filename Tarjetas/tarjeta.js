class TarjetaPlanTuristico extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      const plan = JSON.parse(this.getAttribute('data-plan'));
      const hasDiscount = plan.descuento > 0;
  
      this.shadowRoot.innerHTML = 
         <style>
          .tarjet {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          margin: 16px;
          max-width: 300px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          font-family: Arial, sans-serif;
        }
        </style>