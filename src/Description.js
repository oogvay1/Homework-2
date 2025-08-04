const infoContainer = document.getElementById('moreInfo');

export class Buttons {
    constructor(name) {
        this.name = name;
    }

    info() {
        // Base method
    }
}

export class Description extends Buttons {
    info() {
        // infoContainer.innerHTML = '';
        const text = document.createElement('p');
        // text.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eligendi rerum cupiditate aliquid error deserunt ipsam molestias mollitia natus repellendus.';
        infoContainer.appendChild(text);
    }
}

export class Details extends Buttons {
    info() {
        infoContainer.innerHTML = '';
    }
};

const List = {
    Description,
    Details
};

const buttons = document.querySelectorAll('.info-buttons');

buttons.forEach(el => {
    el.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        el.classList.add('active');

        const name = el.textContent.trim();
        const ClassRef = List[name];

        if (ClassRef) {
            const instance = new ClassRef(name);
            instance.info();
        } else {
            console.warn(`Class not found for: ${name}`);
        }
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const defaultName = 'Description';
    const defaultClass = List[defaultName];
    const defaultButton = Array.from(buttons).find(btn => btn.textContent.trim() === defaultName);

    if (defaultClass && defaultButton) {
        defaultButton.classList.add('active');
        const instance = new defaultClass(defaultName);
        instance.info();
    }
});
