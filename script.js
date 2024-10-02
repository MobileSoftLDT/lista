document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    const resetButton = document.getElementById('reset-button');
    const searchInput = document.getElementById('search');
    const inventory = document.getElementById('inventory');
    const noResults = document.getElementById('no-results');
    const products = inventory.getElementsByClassName('product');

    // Función para buscar productos
    function searchProduct() {
        const searchValue = searchInput.value.toLowerCase().trim();
        let found = false;

        for (let i = 0; i < products.length; i++) {
            const productName = products[i].querySelector('h3').textContent.toLowerCase().trim();
            if (productName.includes(searchValue)) {
                products[i].style.display = 'flex';
                found = true;
            } else {
                products[i].style.display = 'none';
            }
        }

        // Mostrar mensaje si no se encontraron resultados
        noResults.style.display = found ? 'none' : 'block';

        // Mostrar el botón de "Botón de Inicio" si hay una búsqueda activa
        resetButton.style.display = searchValue !== "" ? 'inline-block' : 'none';
    }

    // Función para restablecer la búsqueda
    function resetSearch() {
        searchInput.value = '';
        for (let i = 0; i < products.length; i++) {
            products[i].style.display = 'flex';
        }
        noResults.style.display = 'none';
        resetButton.style.display = 'none';
    }

    // Event Listener para el botón "Buscar"
    searchButton.addEventListener('click', searchProduct);

    // Event Listener para el botón "Botón de Inicio"
    resetButton.addEventListener('click', resetSearch);

    // Event Listener para la tecla 'Enter' en el campo de búsqueda
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            searchProduct();
        }
    });
});
