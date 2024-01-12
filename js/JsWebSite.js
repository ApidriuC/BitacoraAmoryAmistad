class WebSite {
    #currentIndexCarousel = 0;

    constructor(settings) {
        this.settings = settings;
    }

    UpdateSlidePosition() {
        const track = document.querySelector('.carousel-track');
        const slides = document.querySelectorAll('.carousel-slide');
        const slideWidth = slides[0].offsetWidth;

        track.style.transform = `translateX(-${this.#currentIndexCarousel * slideWidth}px)`;
    }

    ShowPrevSlide() {
        const slides = document.querySelectorAll('.carousel-slide');

        if (this.#currentIndexCarousel > 0) {
            this.#currentIndexCarousel --;
        } else {
            this.#currentIndexCarousel = slides.length - 5;
        }
        this.UpdateSlidePosition();
    }

    ShowNextSlide() {
        const slides = document.querySelectorAll('.carousel-slide');

        if (this.#currentIndexCarousel < slides.length - 5) {
            this.#currentIndexCarousel ++;
        } else {
            this.#currentIndexCarousel = 0;
        }
        this.UpdateSlidePosition();
    }

    AddScrollAnimation() {
        const scrollButtons = document.querySelectorAll('.btn-scroll');

        setInterval(() => this.ShowNextSlide(), 3000);

        scrollButtons.forEach(function (button) {
            button.addEventListener('click', function (event) {
                event.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'center',
                        duration: 5000
                    });
                }
            });
        });
    }

    SelectedButtonNav(id) {
        const nodes = document.querySelectorAll('.button-nav');
        const selectedBtn = document.getElementById(id);
        const active = 'selected-btn-nav';

        nodes.forEach(node => {
            node.classList.remove(active);
        });

        selectedBtn.classList.add(active);
    }

    CloseModalGame() {
        document.querySelector('.modal-eco')?.classList.remove('show');
        document.querySelector('.class-layout-manager').style.opacity = '1';

        const boton = document.querySelector('.random-btn');
        boton.style.left = '55%';
        boton.style.top = '20%';
    }

    OpenModalGame() {
        document.querySelector('.class-layout-manager').style.opacity = '0.5';
        document.querySelector('.modal-eco')?.classList.add('show');
    }

    RandomButtonMovement() {
        const contenedor = document.querySelector('.container-buttons-randoms');
        const boton = document.querySelector('.random-btn');

        const contenedorRect = contenedor.getBoundingClientRect();
        const botonRect = boton.getBoundingClientRect();

        const maxX = contenedorRect.width - botonRect.width;
        const maxY = contenedorRect.height - botonRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        boton.style.left = randomX + 'px';
        boton.style.top = randomY + 'px';
    }

    SaveMiniGame() {
        alert('Sabia que dirías que si, TE AMO!');
        this.CloseModalGame();
    }
}

window.WebSite = new WebSite();