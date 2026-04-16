const cardRow = document.getElementById('card-row');


fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        // Step 3: Manipulating the DOM to display the fetched data in card layout using bootstrap classes
        data.forEach(product => {
            const card = document.createElement('div');
            card.className = 'col-md-3 mb-3';
            card.innerHTML = `
                        <div class="card ">
                            <div class="card-body">
                                <h5 class="card-title
                                ">${product.title}</h5>
                                
            
                                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                                <p class="card-text">Price: $${product.price.toFixed(2)}</p>
                                <p class="card-text">Category: ${product.category}</p>
                                <div id="description">
                                    <p class="card-text">Description: ${product.description}</p>
                                </div>
                                <p class="card-text">Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
                                
                                </div>
                                    <button onclick="addToCart(${product.id})" class="btn btn-primary">Add to Cart</button>

                        </div>
                    `;
            cardRow.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    function addToCart(productId) {
        // Implement your logic to add the product to the cart
  const el = document.querySelector(".count"); // or #count
let quantity = parseInt(el.innerText);

quantity++;
el.innerText = quantity;
    }