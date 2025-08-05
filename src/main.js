import { Gadget, Fruit, Clothing, Food } from "./Build";
import Lenis from "lenis";
import { Description, Details } from "./Description";
import starElements from "./Stars";
import { Modal } from "./Modal";

let products = [];

const List = {
    Gadget: Gadget,
    Fruit: Fruit,
    Clothing: Clothing,
    Food: Food
};


function SmoothScroll() {
    const lenis = new Lenis();

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
}

SmoothScroll();

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
        const name = data.naming.type;
        const newProducts = new List[name](data);

        const domCard = newProducts.build();

        cardContainer.appendChild(domCard);
    }
}

init();
