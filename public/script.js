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
})

const incrementBtn = (event) => {
    
}
const decrementBtn = () => {
    
    if(quantity > 1) {
        quantity--
        document.querySelector('.productQuantity').textContent = quantity
    }
}