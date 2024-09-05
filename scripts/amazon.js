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

let productsHtml ='';

products.forEach((product) => {
    productsHtml += ``
})

console.log(productsHtml)


document.querySelector('js-grid').innerHTM = productsHtml
