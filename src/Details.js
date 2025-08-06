class MainDetails {

    constructor(data) {
        this.data = data
    }

    info() {

    }
}

export class Details extends MainDetails {

    info() {

        const infoContainer = document.getElementById('moreInfo');

        infoContainer.textContent = 'salom';
    }
};

export class DetailsG extends MainDetails {

    info() {
        const infoContainer = document.getElementById('moreInfo');

        infoContainer.innerHTML = `
        <div class="details-color">
            <ul id="ul">
        
            </ul>
        </div>
        `;


        const ul = document.getElementById('ul');
        if (!ul) return;

        for (const color of this.data.available.availableColors) {
            const colorContainer = document.createElement('li');
            colorContainer.classList = 'li';

            colorContainer.innerHTML = `
                <div style="background: ${color.color};"></div>
                <span>${color.colorName}</span>
            `;

            ul.appendChild(colorContainer);
        }

        ul.querySelectorAll('li').forEach(el => {
            el.addEventListener('click', () => {

                ul.querySelectorAll('li').forEach(element => {
                    element.classList.remove('active');
                });

                el.classList.add('active');
            });
        });

    }
};