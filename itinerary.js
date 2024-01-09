
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