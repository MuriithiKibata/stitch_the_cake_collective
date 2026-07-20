
const productsContainer = document.getElementById("products-container");

const api_url = "https://6a5dcb310ad09982aef77c8f.mockapi.io/bakery/products"
let globalProducts = [];

function createProducts(product) {
  return `
<article class="group flex flex-col relative bg-surface rounded-xl overflow-hidden soft-shadow hover-scale">
    <div class="relative w-full aspect-[4/5] bg-surface-container-low overflow-hidden">
    <img alt="Pistachio Opera Cake" class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" data-alt="A macro shot of beautifully layered pistachio and matcha opera cake, showcasing pristine green and chocolate layers. Set against a clean, warm white background in light mode, with a luxurious, indulgent atmosphere and a hint of soft mint secondary color styling." src="${product.product_image}"/>
    <button aria-label="Add to Favorites" class="absolute top-4 right-4 h-10 w-10 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface transition-all duration-300">
    <span class="material-symbols-outlined text-[20px]" data-icon="favorite_border">favorite_border</span>
    </button>
    </div>
    <div class="p-5 flex flex-col flex-grow">
    <div class="flex justify-between items-start mb-2">
    <h2 class="text-headline-sm font-headline-sm text-on-surface">${product.name}</h2>
    <span class="text-headline-sm font-headline-sm text-on-surface ml-4">ksh ${product.price}</span>
    </div>
    <p class="text-label-sm font-label-sm text-on-surface-variant mb-4 flex items-center">
    <span class="material-symbols-outlined text-[16px] mr-1" data-icon="storefront">storefront</span>
                                    Sugar Bloom Patisserie
                                </p>
    <div class="mt-auto pt-4 border-t border-surface-container-high opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <button class="w-full py-3 bg-surface-tint text-on-primary rounded-lg text-label-md font-label-md hover:bg-inverse-surface transition-colors" onclick="addToCart(${product.id})">Add to Bag</button>
    </div>
    </div>
</article>
        `;
}


async function fetchProducts() {
    try {
        const response = await fetch(api_url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const products = await response.json();
        globalProducts = products; // Store the fetched products in the global variable
        console.log(globalProducts)
        const productHTML = products.map((product) => {
            return createProducts(product);
        }).join("");

        productsContainer.innerHTML = productHTML
    } catch (error) {
        console.error("Error fetching products:", error);
        productsContainer.innerHTML = `
            <div class="col-span-full text-center py-12 text-error">
                <p>Unable to load products at this time. Please check your connection or MockAPI URL.</p>
            </div>
        `;
    }
}



function addToCart(productId) {
    const product = globalProducts.find((product) => String(product.id) === String(productId));
    console.log(productId)
    if (!product) {
        console.error("Product not found:", productId);
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = cart.findIndex((item) => String(item.id) === String(productId));

    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += 1;
    }
    else {
        cart.push({ ...product, quantity: 1 });
        alert(`${product.name} has been added to your cart.`);
    }


    localStorage.setItem("cart", JSON.stringify(cart));

}

fetchProducts();
