const productContainer = document.getElementById('productContainer')
const productTemplate = document.getElementById('productTemplate')

let quantity = 1

const products = [
    {
        "id": 1,
        "name": "Laptop",
        "category": "Computers",
        "brand": "ExampleBrand",
        "price": 999.99,
        "stock": 50,
        "description": "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256 GB SSD, and a 14-inch FHD Display.",
        "image": "images/laptop.png"
    },
    {
        "id": 2,
        "name": "Headphone",
        "category": "Accessories",
        "brand": "ExampleBrand",
        "price": 500,
        "stock": 10,
        "description": "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256 GB SSD, and a 14-inch FHD Display.",
        "image": "images/headphone.png"
    },
    {
        "id": 3,
        "name": "Appliances",
        "category": "Accessories",
        "brand": "ExampleBrand",
        "price": 250,
        "stock": 58,
        "description": "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256 GB SSD, and a 14-inch FHD Display.",
        "image": "images/heroImage.png"
    },
    {
        "id": 4,
        "name": "iPhone",
        "category": "Mobile",
        "brand": "ExampleBrand",
        "price": 1200,
        "stock": 129,
        "description": "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256 GB SSD, and a 14-inch FHD Display.",
        "image": "images/mobiles.png"
    }

]

products.forEach((product) => {
    const productClone = document.importNode(productTemplate.content, true)

    const {name, image, description, price, category, stock} = product

    productClone.querySelector('.productCategory').textContent = category
    productClone.querySelector('.productName').textContent = name
    productClone.querySelector('.productImage').src = image
    productClone.querySelector('.productImage').alt = name
    productClone.querySelector('.productDescription').textContent = description
    productClone.querySelector('.productStock').textContent = stock
    productClone.querySelector('.productPrice').textContent = `$${price}`
    productClone.querySelector('.productActualPrice').textContent = `$${price}`
    
    const productCard = productClone.querySelector('.card')
    productCard.dataset.productId = product.id

    productContainer.append(productClone)

    productClone.querySelector('.addCartBtn').addEventListener('click', (event) => {
        const productId = product.id
        const productStock = product.stock
        addToCart(event, productId, productStock)
    })
  
})

// ----- Start Quantity Increment and Decrement Functionality -----
const incrementBtn = (event) => {
    const productCard = event.target.closest('.card')
    const productQuantity = productCard.querySelector('.productQuantity')

    let quantity = parseInt(productQuantity.textContent)
    quantity++
    productQuantity.textContent = quantity
}
const decrementBtn = (event) => {

    const productCard = event.target.closest('.card')
    const productQuantity = productCard.querySelector('.productQuantity')

    let quantity = parseInt(productQuantity.textContent)

    if(quantity > 1) {
        quantity--
        productQuantity.textContent = quantity
    }
}
// ----- End Quantity Increment and Decrement Functionality -----

// ----- Start Add To Cart -----

const addToCart = (event, productId, productStock) => {
    const productCard = event.target.closest('.card')
    const productQuantity = productCard.querySelector('.productQuantity')
    const productPrice = productCard.querySelector('.productPrice')

    let quantity = parseInt(productQuantity.textContent)
    let price = parseFloat(productPrice.textContent.replace("$", ""))
    let stock = parseInt(productStock)

    console.log(productId, quantity, price, stock)
}
// ----- End Add To Cart -----