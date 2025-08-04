import { GadgetM, FruitM } from "./Modal";

export class Product {

    constructor(data) {
        this.product = data;
    }

    build() {
        const card = document.createElement('div');
        card.classList = 'card';
        const available = this.product.available.availableNumber;

        card.innerHTML = `
                <div class="card-main-part">
                    <div class="product-type">
                        <p>${this.product.naming.type}</p>
                    </div>
                    <div class="card-img-container">
                        <img class="card-img" src=${this.product.images.src} alt="">
                        <div class="gradient"></div>
                    </div>
                </div>

                <div class="main-product-info">
                    <p class="product-name">${this.product.naming.name}</p>

                    <div class="product-prices">
                        <div class="market-name">
                            <img src=${this.product.market.marketLogo} alt="">
                            <p>${this.product.market.marketName}</p>
                        </div>

                        <div class="price-main">
                            <p class="price">Price</p>
                            <p>${this.product.pricing.price}</p>
                        </div>
                    </div>
                </div>

                <div class="price-pay-type">
                    <div class="pay-types">
                        <p>Payment type</p>

                        <div class="pay-icon">
                            <div class="credit pay-container">
                                <img src="./public/image-removebg-preview.png" alt="">
                                <p>${this.product.payment.paymentType.creditCard ? this.product.payment.paymentType.creditCard : this.product.payment.paymentType.cash}</p>
                            </div>
                            <div class="line"></div>
                            <div class="coins pay-container">
                                <img src="./public/image-removebg-preview (1).png" alt="">
                                <p>${this.product.payment.paymentType.coins ? this.product.payment.paymentType.coins : this.product.payment.paymentType.cash}</p>
                            </div>
                        </div>
                    </div>

                    <div class="discount">
                        <p>Available</p>
                        <div class="available-icon">
                            <div class="${available > 0 && available < 5 ? 'red' : available < 20 && available > 10 ? 'orange' : 'dot'}"></div>
                            <p>${this.product.available.availableNumber} ${this.product.naming.type == 'Fruit' ? '/ kg' : 'left'}</p>
                        </div>
                    </div>
                </div>

                <button class="order-btn">Order now</button>
            `
        const img = document.querySelector('.card-img');

        card.addEventListener('click', () => {
            const modal = new FruitM(this.product).modal();
        });

        return card
    }
}

export class Gadget extends Product { };
export class Fruit extends Product { };
export class Clothing extends Product { };
export class Food extends Product { };