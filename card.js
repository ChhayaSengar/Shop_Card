// script.js

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById('product-list');
            
            data.forEach(product => {
                const card = document.createElement('div');
                card.classList.add('card');
                
                const img = document.createElement('img');
                img.src = product.image;
                img.alt = product.title;
                
                const title = document.createElement('h3');
                title.textContent = product.title;
                
                const price = document.createElement('p');
                price.textContent = '$' + product.price;
                
                const button = document.createElement('button');
                button.textContent = 'Add to Cart';
                button.classList.add('add-to-cart-btn'); // Added class for styling
                
                button.addEventListener('click', () => {
                    alert(`Added ${product.title} to cart!`);
                    // Here you can add further logic to add the product to the cart
                    // For a real application, you would typically handle this with backend/API calls
                });
                
                card.appendChild(img);
                card.appendChild(title);
                card.appendChild(price);
                card.appendChild(button);
                
                productList.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});
