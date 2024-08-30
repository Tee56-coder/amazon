const products = [
    {
        image:'images/products/athletic-cotton-socks-6-pairs.jpg',
        name: 'socks',
        rating:{
            star:'4.5',
            count:'85'
        },
        priceCents: 1090
    },
    {
        image:'images/products/intermediate-composite-basketball.jpg',
        name: 'ball',
        rating:{
            star:'4',
            count:'127'
        },
        priceCents: 2095
    },
    {
        image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
        name: 't-shirt',
        rating:{
            star:'3',
            count:'97'
        },
        priceCents: 799 
    }
];

// products.forEach{
//     function (products){

//     }
// }

products.forEach((product) => {
    const html = ` <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
            ${product.rating.star * 10}
            <div class="product-rating-count link-primary">
            ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $10.90
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>`

        console.log(html)
})

