
// Agregar a tu archivo JavaScript
document.querySelectorAll('.tooltip').forEach(item => {
    item.addEventListener('mouseover', event => {
        item.querySelector('.tooltiptext').style.visibility = 'visible';
        item.querySelector('.tooltiptext').style.opacity = 1;
    });

    item.addEventListener('mouseout', event => {
        item.querySelector('.tooltiptext').style.visibility = 'hidden';
        item.querySelector('.tooltiptext').style.opacity = 0;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Obtén todos los detalles del día y los puntos en el mapa
    const days = document.querySelectorAll('.day');
    const tooltips = document.querySelectorAll('.tooltip');

    // Función para mostrar el tooltip correspondiente
    function showTooltip(id) {
        tooltips.forEach(tooltip => {
            const tooltipDay = tooltip.getAttribute('data-day');
            if(tooltipDay === id) {
                tooltip.querySelector('.tooltiptext').style.visibility = 'visible';
            }
        });
    }

    // Función para ocultar todos los tooltips
    function hideTooltips() {
        tooltips.forEach(tooltip => {
            tooltip.querySelector('.tooltiptext').style.visibility = 'hidden';
        });
    }

    // Agrega event listeners a cada detalle del día
    days.forEach(day => {
        day.addEventListener('mouseenter', function() {
            // Muestra el tooltip correspondiente al día
            showTooltip(this.id);
        });

        day.addEventListener('mouseleave', function() {
            // Oculta todos los tooltips
            hideTooltips();
        });
    });
});
