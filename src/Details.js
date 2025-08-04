
class Product {

    constructor(name) {
        this.name = name
    }

    build() {

    };
}

export class Gadget extends Product {

    build() {

        const ul = document.createElement('ul');
    }
}
