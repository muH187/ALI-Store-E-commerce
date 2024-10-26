
document.addEventListener('DOMContentLoaded', () => {
    const checkoutContainer = document.querySelector('.checkoutContainer');
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const render = () => {
        if (cartItems.length === 0) {
            checkoutContainer.innerHTML = '<a id="backToShopping" class="text-2xl font-[500] hover:text-slate-600" href="index.html">Continue Shopping</a>'
            checkoutContainer.innerHTML += '<p>Your cart is empty.</p>'
            return;
        }
        
        cartItems.forEach((item, index) => {
            checkoutContainer.innerHTML = '';
            const cartTemplate = document.getElementById('cartTemplate')
            const productCart = document.importNode(cartTemplate.content, true)
            productCart.querySelector('.productCategory').textContent = item.category
            productCart.querySelector('.productImage').src = item.image
            productCart.querySelector('.productImage').alt = item.name
            productCart.querySelector('.productName').textContent = item.name
            productCart.querySelector('.productPrice').textContent = `$${item.price}`
            productCart.querySelector('.productQuantity').textContent = item.quantity
            productCart.querySelector('#removeBtn').addEventListener('click', () => {
                removeItem(index)
            })
            

            productCart.querySelector('.cartIncrement').addEventListener('click', () => {
                item.quantity++
                localStorage.setItem('cartItems', JSON.stringify(cartItems))
                render()
            })

            productCart.querySelector('.cartDecrement').addEventListener('click', () => {
                if(item.quantity > 1) {
                    item.quantity--
                    localStorage.setItem('cartItems', JSON.stringify(cartItems))
                    render()
                }
            })

            checkoutContainer.append(productCart)
        })
    };

    const removeItem = (index) => {
        cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        render();
    };

    const loadCart = () => {
        const storedCart = JSON.parse(localStorage.getItem('cartItems'));
        if (storedCart) {
            cartItems = storedCart;
        }
    };

    const init = () => {
        loadCart();
        render();
    };
    init();
});

