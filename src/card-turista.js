class cardTurist extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    //Sacando la info del archivo JSON
    const destino = this.getAttribute('destino'); 
    const duracion = this.getAttribute('duracion');
    const costo = this.getAttribute('costo');
    const descripcion = this.getAttribute('descripcion');
    const actividades = this.getAttribute('actividades');
    const reservado = this.getAttribute('reservado');
    const imagen = this.getAttribute('imagen');
    const calificacion = this.getAttribute('calificacion');
    const alojamiento = this.getAttribute('alojamiento');
    const guia_incluido = this.getAttribute('guia_incluido');

    //Componer el HTML
    this.shadowRoot.innerHTML = `
      <style>
        .card {
          width: 300px;
          height: 400px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s;
        }
        .card:hover {
          transform: scale(1.05);
        }
        .card img {
          width: 100%;
          height: auto;
        }
        .card h2 {
          font-size: 24px;
          margin: 16px;
        }
        .card p {
          font-size: 16px;
          margin: 16px;
        }
      </style>
      <div class="card">
        <img src="${this.getAttribute('imagen')}" alt="Tourist Card Image">
        <h2> ${destino}</h2>
        <p>Duracion: ${duracion}</p>
        <p>Costo: ${costo}</p>
        <p>Descripcion: ${descripcion}</p>
        <p>Actividades: ${actividades}</p>
        <p>Reservado: ${reservado}</p>
        <p>Calificacion: ${calificacion}</p>
        <p>Alojamiento: ${alojamiento}</p>
        <p>Guia incluido: ${guia_incluido}</p>
        <button id="reservar">Reservar</button>
        <button id="cancelar">Cancelar</button>
        <button id="modificar">Modificar</button>
        <button id="ver">Ver</button>
        `;
    this.shadowRoot.querySelector("#reservar").addEventListener("click", () => {
        alert("Reservado");
    }
    );
    this.shadowRoot.querySelector("#cancelar").addEventListener("click", () => {
        alert("Cancelado");
    }
    );
   
    
    this.shadowRoot.querySelector("#modificar").addEventListener("click", () => {
        alert("Modificar");
    }
    );
    this.shadowRoot.querySelector("#ver").addEventListener("click", () => {
        alert("Ver");
    }
     
    );
  }
}
customElements.define("card-turista", cardTurist);
export default cardTurist;


import cardTurista from './card-turista.js';
const card = new cardTurista();
document.body.appendChild(card);
card.setAttribute('destino', 'Paris');
card.setAttribute('duracion', '5 dias');
card.setAttribute('costo', '$500');
card.setAttribute('descripcion', 'Un viaje a Paris');
card.setAttribute('actividades', 'Visitar la Torre Eiffel, Louvre, etc.');
card.setAttribute('reservado', 'No');
card.setAttribute('imagen', 'https://example.com/image.jpg');
card.setAttribute('calificacion', '5 estrellas');

