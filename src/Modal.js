import Lenis from "lenis";
import renderStars from "./Stars";

export class Modal {

    constructor(data) {

        this.product = data;

        this.Modal = document.createElement('div');
        this.Modal.classList = 'modal';
    }

    modal() {

    }
}

export class Gadget2 extends Modal {

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
                            <div class="datail">
                                <li>Rrocessor</li>
                                <li>${this.product.aboutProduct.processor}</li>
                            </div>
                            <div class="datail">
                                <li>Camera</li>
                                <li>${this.product.aboutProduct.camera}</li>
                            </div>
                            <div class="datail">
                                <li>Screen</li>
                                <li>${this.product.aboutProduct.screen}</li>
                            </div>
                            <div class="datail">
                                <li>Cover</li>
                                <li>${this.product.aboutProduct.cover ? this.product.aboutProduct.cover : this.product.aboutProduct.os}</li>
                            </div>
                            <div class="datail">
                                <li>Battery</li>
                                <li>${this.product.aboutProduct.battery}</li>
                            </div>
                            <div class="datail">
                                <li>Storage</li>
                                <li>${this.product.aboutProduct.storage}</li>
                            </div>
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
    }

    remove() {
        this.Modal.innerHTML = ``;
    }
}

export class Fruit extends Modal {

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
                            <div class="datail">
                                <li>Rrocessor</li>
                                <li>${this.product.aboutProduct.processor}</li>
                            </div>
                            <div class="datail">
                                <li>Camera</li>
                                <li>${this.product.aboutProduct.camera}</li>
                            </div>
                            <div class="datail">
                                <li>Screen</li>
                                <li>${this.product.aboutProduct.screen}</li>
                            </div>
                            <div class="datail">
                                <li>Cover</li>
                                <li>${this.product.aboutProduct.cover ? this.product.aboutProduct.cover : this.product.aboutProduct.os}</li>
                            </div>
                            <div class="datail">
                                <li>Battery</li>
                                <li>${this.product.aboutProduct.battery}</li>
                            </div>
                            <div class="datail">
                                <li>Storage</li>
                                <li>${this.product.aboutProduct.storage}</li>
                            </div>
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
    }

    remove() {
        this.Modal.innerHTML = ``;
    }
}