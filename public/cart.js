let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const render = () => {
    const checkoutContainer = document.querySelector('.checkoutContainer'); 
    checkoutContainer.innerHTML = ''; 

    if (cartItems.length === 0) {
        checkoutContainer.innerHTML = '<p>Your cart is empty.</p>';
        const backToShopping = document.getElementById('backToShopping')
        backToShopping.textContent = "Back To Shopping"
        return;
    }

    cartItems.forEach(item => {
        const cartTemplate = document.getElementById('cartTemplate');
        const productCart = document.importNode(cartTemplate.content, true);

        productCart.querySelector('.productCategory').textContent = item.category;
        productCart.querySelector('.productImage').src = item.image;
        productCart.querySelector('.productImage').alt = item.name;
        productCart.querySelector('.productPrice').textContent = `$${item.price}`;
        productCart.querySelector('.productQuantity').textContent = item.quantity;

        checkoutContainer.append(productCart);
    });
};


render();
