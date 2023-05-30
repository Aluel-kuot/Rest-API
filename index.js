
let productContainer=document.getElementById('items')

const getProduct=()=>{
    return fetch('https://dummyjson.com/products')
  .then(response=>response.json())
  .then(response=>response)
  .catch(error=>error.message)
};


const displayProducts=async()=>{
  const items=  await getProduct();
  console.log(items.items);
  items.items.map(item => {
      let div=document.createElement('div')
      div.className='product';
      let img=document.createElement('img')
      let products=document.createElement('h2')
      let price=document.createElement('p')
      img.src=item.images;
      products.innerHTML=item.products
      price.innerHTML=item.price;
      div.appendChild(img);
      div.appendChild(products);
      div.appendChild(price);
      productContainer.appendChild(div);

  });
};
displayProducts();