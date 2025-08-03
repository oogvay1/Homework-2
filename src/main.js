import { Gadget, Fruit, Clothing, Food } from "./Build";
let products = [];
const List = {
    Gadget: Gadget,
    Fruit: Fruit,
    Clothing: Clothing,
    Food: Food
}

async function GetProduct() {

    try {
        const res = await fetch('../data/product.json');

        if (!res.ok) throw new Error

        const data = await res.json();
        products = data;
    } catch (error) {
        console.error(error);
    }
}

async function init() {
    await GetProduct();

    const cardContainer = document.getElementById('cards-container');

    for (const data of products) {
        const name = data.naming.type
        const newProducts = new List[name]( data );
        
        const domCard = newProducts.build();
        cardContainer.appendChild(domCard);
    }
}
init();
