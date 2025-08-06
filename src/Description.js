
export class Buttons {

    constructor(data) {
        this.data = data;
    }

    info() {

    }
}

export class Description extends Buttons {

    info() {
        const infoContainer = document.getElementById('moreInfo');

        if (infoContainer) {
            infoContainer.innerHTML = '';

            infoContainer.innerHTML = `
            <div class="datail">
                <li>Origin</li>
                <li>${this.data.aboutProduct.origin}</li>
            </div>
            <div class="datail">
                <li>Ripeness</li>
                <li>${this.data.aboutProduct.ripeness}</li>
            </div>
            <div class="datail">
                <li>Packaging</li>
                <li>${this.data.aboutProduct.packaging}</li>
            </div>
            <div class="datail">
                <li>ShelfLife</li>
                <li>${this.data.aboutProduct.shelfLife}</li>
            </div>
            <div class="datail">
                <li>Vitamins</li>
                <li id="vitamins"></li>
            </div>
            <div class="datail">
                <li>${this.data.aboutProduct.sweetness ? 'Sweetness' : 'Taste'}</li>
                <li>${this.data.aboutProduct.sweetness ? this.data.aboutProduct.sweetness : this.data.aboutProduct.taste}</li>
            </div>`;
        }


        const vitamins = document.getElementById('vitamins');

        if (vitamins) {

            for (const vitamin of this.data.aboutProduct.vitamins) {

                const vitaminContainer = document.createElement('li');

                vitaminContainer.textContent = vitamin;

                vitamins.appendChild(vitaminContainer);
            }
        }

    }
}

export class DescriptionG extends Buttons {
    info() {
        const infoContainer = document.getElementById('moreInfo');

        if (infoContainer) {
            infoContainer.innerHTML = '';

            infoContainer.innerHTML = `
                <div class="datail">
                                <li>Rrocessor</li>
                                <li>${this.data.aboutProduct.processor}</li>
                            </div>
                            <div class="datail">
                                <li>Camera</li>
                                <li>${this.data.aboutProduct.camera}</li>
                            </div>
                            <div class="datail">
                                <li>Screen</li>
                                <li>${this.data.aboutProduct.screen}</li>
                            </div>
                            <div class="datail">
                                <li>${this.data.aboutProduct.cover ? 'Cover' : 'Os'}</li>
                                <li>${this.data.aboutProduct.cover ? this.data.aboutProduct.cover : this.data.aboutProduct.os}</li>
                            </div>
                            <div class="datail">
                                <li>Battery</li>
                                <li>${this.data.aboutProduct.battery}</li>
                            </div>
                            <div class="datail">
                                <li>Storage</li>
                                <li>${this.data.aboutProduct.storage}</li>
                            </div>
            `;
        }

    }
}