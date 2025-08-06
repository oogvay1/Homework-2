import Lenis from "lenis";
import renderStars from "./Stars";
import { Description, DescriptionG } from "./Description";
import { Details, DetailsG } from "./Details";

const List = {
    Description: Description,
    Details: Details
};

const List2 = {
    Description: DescriptionG,
    Details: DetailsG
};

let products = null;

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

export class Modal {

    constructor(data) {

        this.product = data;

        this.Modal = document.createElement('div');
        this.Modal.classList = 'modal';
    }

    modal() {

    }
}

export class GadgetM extends Modal {

    modal() {
        this.Modal.innerHTML = ``;

        this.Modal.innerHTML = `
            <div class="modal-content">
            <div class="modal-inner">

                <div class="modal-image">
                    <img src="${this.product.images.src}" alt="">
                </div>

                <div class="modal-full-info">
                    <div class="main-modal">
                        <div class="modal-product-type">
                            <p>${this.product.naming.type}</p>
                        </div>

                        <div class="modal-product-name">
                            <div class="modal-name">
                                <p>${this.product.naming.name}</p>

                                <div class="modal-market">
                                    <div class="modal-market-img">
                                        <img src="${this.product.market.marketLogo}" alt="">
                                    </div>
                                    <p>${this.product.market.marketName}</p>
                                </div>
                            </div>

                        </div>
                        <div class="modal-stars">
                            <div class="modal-price">
                                <p>${this.product.pricing.price}</p>
                            </div>

                            <div id="starsContainer"></div>
                        </div>

                        <div class="modal-buttons">
                            <button class="info-buttons">Description</button>
                            <button class="info-buttons">Details</button>
                        </div>

                        <div id="moreInfo">
                            
                        </div>
                    </div>

                    <button class="modal-btn">Add to cart</button>
                </div>

            </div>
            <div class="quit-btn">X</div>
        </div>
        `
        const modalContainer = document.getElementById('modalContainer');

        modalContainer.appendChild(this.Modal);

        const starsContainer = this.Modal.querySelector('#starsContainer');
        if (starsContainer) {
            renderStars(starsContainer);
        }

        const quitBtn = this.Modal.querySelector('.quit-btn');
        if (quitBtn) {
            quitBtn.addEventListener('click', () => {
                this.remove();
            });
        }

        this.Modal.addEventListener('click', (e) => {
            if (e.target.closest('.modal-inner') == null) {
                this.Modal.remove();
            }
        });

        const buttons = document.querySelectorAll('.info-buttons');

        function init(product) {
            if (buttons) {
                buttons.forEach(el => {
                    el.addEventListener('click', () => {
                        buttons.forEach(btn => btn.classList.remove('active'));
                        el.classList.add('active');

                        const name = el.textContent.trim();
                        const ClassRef = List2[name];

                        if (ClassRef) {
                            const instance = new ClassRef(product);
                            instance.info();
                        }
                    });
                });
            }

            const defaultName = 'Description';
            const defaultClass = List2[defaultName];
            const defaultButton = Array.from(buttons).find(btn => btn.textContent.trim() === defaultName);

            if (defaultClass && defaultButton) {
                defaultButton.classList.add('active');
                const instance = new defaultClass(product);
                instance.info();
            }
        }

        document.querySelector('.modal-btn').addEventListener('click', () => {
            alert('aded to cart');
        });

        init(this.product);
    }

    remove() {
        this.Modal.innerHTML = ``;
    }
}

export class FruitM extends Modal {

    modal() {
        this.Modal.innerHTML = ``;

        this.Modal.innerHTML = `
            <div class="modal-content">
            <div class="modal-inner">

                <div class="modal-image">
                    <img src="${this.product.images.src}" alt="">
                </div>

                <div class="modal-full-info">
                    <div class="main-modal">
                        <div class="modal-product-type">
                            <p>${this.product.naming.type}</p>
                        </div>

                        <div class="modal-product-name">
                            <div class="modal-name">
                                <p>${this.product.naming.name}</p>

                                <div class="modal-market">
                                    <div class="modal-market-img">
                                        <img src="${this.product.market.marketLogo}" alt="">
                                    </div>
                                    <p>${this.product.market.marketName}</p>
                                </div>
                            </div>

                        </div>
                        <div class="modal-stars">
                            <div class="modal-price">
                                <p>${this.product.pricing.price}</p>
                            </div>

                            <div id="starsContainer"></div>
                        </div>

                        <div class="modal-buttons">
                            <button class="info-buttons">Description</button>
                            <button class="info-buttons">Details</button>
                        </div>

                        <div id="moreInfo">
                            
                        </div>
                    </div>

                    <button class="modal-btn">Add to cart</button>
                </div>

            </div>
            <div class="quit-btn">X</div>
        </div>
        `

        const modalContainer = document.getElementById('modalContainer');

        modalContainer.appendChild(this.Modal);

        const starsContainer = this.Modal.querySelector('#starsContainer');
        if (starsContainer) {
            renderStars(starsContainer);
        }

        const quitBtn = this.Modal.querySelector('.quit-btn');
        if (quitBtn) {
            quitBtn.addEventListener('click', () => {
                this.Modal.remove();
            });
        }

        this.Modal.addEventListener('click', (e) => {
            if (e.target.closest('.modal-inner') == null) {
                this.Modal.remove();
            }
        });

        const buttons = document.querySelectorAll('.info-buttons');

        function init(product) {
            if (buttons) {
                buttons.forEach(el => {
                    el.addEventListener('click', () => {
                        buttons.forEach(btn => btn.classList.remove('active'));
                        el.classList.add('active');

                        const name = el.textContent.trim();
                        const ClassRef = List[name];

                        if (ClassRef) {
                            const instance = new ClassRef(product);
                            instance.info();
                        }
                    });
                });
            }

            const defaultName = 'Description';
            const defaultClass = List[defaultName];
            const defaultButton = Array.from(buttons).find(btn => btn.textContent.trim() === defaultName);

            if (defaultClass && defaultButton) {
                defaultButton.classList.add('active');
                const instance = new defaultClass(product);
                instance.info();
            }
        }

        document.querySelector('.modal-btn').addEventListener('click', () => {
            alert('aded to cart');
        });

        init(this.product);
    }

    remove() {
        this.Modal.innerHTML = ``;
    }
}