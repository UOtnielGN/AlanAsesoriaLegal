// script.js
document.addEventListener("DOMContentLoaded", function () {
    const titleContainer = document.getElementById('titleContainer');
    const title = document.getElementById('title');

    title.addEventListener('click', function () {
        titleContainer.classList.add('clicked');
        setTimeout(function () {
            titleContainer.classList.remove('clicked');
        }, 1000); // 1000 milisegundos = 1 segundo
    });
    
document.addEventListener("DOMContentLoaded", function () {
    // Animación de desplazamiento suave para los enlaces internos
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }
    
    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;
    
        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }

    // Animación para resaltar elementos al pasar el cursor
    const elementsToHighlight = document.querySelectorAll('.highlight-on-hover');

    elementsToHighlight.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transition = 'background-color 0.3s ease';
            element.style.backgroundColor = '#ffcc00'; // Color de resaltado
        });

        element.addEventListener('mouseleave', () => {
            element.style.backgroundColor = 'transparent'; // Revertir al color original
        });
    });
});
