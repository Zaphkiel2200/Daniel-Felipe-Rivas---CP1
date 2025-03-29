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
          border: 5px solid #ddd;
          border-radius: 15px;
          padding: 16px;
          margin: 10px;
          max-width: 300px;
          background: white;
          border-color: aqua;

        }

        </style>
        <div class="tarjeta">
        <h2></h2>
        <p>Destino: ${plan.destino}
        <br>Duración: ${plan.duracion}
        <br>Costo: ${plan.costo}
        <br> Descripción:${plan.descripcion} <br> Actividades: ${plan.actividades} <br>
         Disponibilidad: ${plan.disponibilidad} <br> Tipo de alojamiento: ${plan.alojamiento}
        <br> Guía turístico incluido: ${plan.guia_incluido} </p>
        <button> Reservar ${plan.reservado} </button>
      </div>
    `;
  }
}

customElements.define('tarjeta-plan-turistico', TarjetaPlanTuristico);
