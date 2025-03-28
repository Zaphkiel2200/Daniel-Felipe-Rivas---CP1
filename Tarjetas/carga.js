document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('planes-turisticos.json');
      const planes = await response.json();
      const container = document.getElementById('planes-container');
      
      planes.forEach(plan => {
        const tarjeta = document.createElement('tarjeta-plan-turistico');
        tarjeta.setAttribute('data-plan', JSON.stringify(plan));
        container.appendChild(tarjeta);
      });
      
    } catch (error) {
      console.error('Error al cargar los planes:', error);
      container.innerHTML = '<p>Error al cargar los planes</p>';
    }
  });