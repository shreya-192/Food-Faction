
        const cart = [];
        const cartCount = document.getElementById('cart-count');
        const cartItems = document.getElementById('cart-items');

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (event) => {
                const productDiv = event.target.closest('.product');
                const productId = productDiv.dataset.id;
                const productName = productDiv.querySelector('h2').innerText;
                const productPriceText = productDiv.querySelector('p:last-of-type').innerText;
                const productPrice = parseFloat(productPriceText.replace(/[^0-9.-]+/g,"")); // Extract numeric value

                addToCart({ id: productId, name: productName, price: productPrice });
            });
        });

        function addToCart(product) {
            cart.push(product);
            updateCartCount();
            displayCartItems();
        }

        function updateCartCount() {
            cartCount.innerText = cart.length;
        }

        function displayCartItems() {
            cartItems.innerHTML = ''; 
            cart.forEach(product => {
                const itemDiv = document.createElement('div');
                itemDiv.innerText = `${product.name} - $${product.price.toFixed(2)}`;
                cartItems.appendChild(itemDiv);
            });
        }

        // Submit button functionality
        document.getElementById('submit-button').addEventListener('click', () => {
            const totalAmount = cart.reduce((sum, product) => sum + product.price, 0);
            alert(`Total Amount: $${totalAmount.toFixed(2)}`);
        });
    