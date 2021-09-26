import { BaseComponent } from '../../base/base-component';
import './cards.scss';

const FLIP_CLASS = 'flipped';

export class Card extends BaseComponent {
  isFlipped = false;

  constructor(readonly image: string, readonly translation: string, readonly sound: string) {
    super('div', ['card-container']);
    this.element.innerHTML = `
    <div class="card" id="${image.split('/')[1].split('.')[0]}-card">
      <div class="card__image-front"
        id="${image.split('/')[1].split('.')[0]}-image"
        style="background-image: url('./images/${image}')">
      </div>
      <div class="card__title-front"
        id="${image.split('/')[1].split('.')[0]}-title">${image.split('/')[1].split('.')[0]}
      </div>
      <img src="./turn-over.svg" class="card-turn-over" id="btn-turn-${image.split('/')[1].split('.')[0]}">
      <div class="card__image-back" style="background-image: url('./images/${image}')"></div>
      <div class="card__title-back">${translation}</div>
      <div class="card-block" id="${image.split('/')[1].split('.')[0]}-block" ></div>
    </div>
    <audio class="sounds"
      id="${sound.split('/')[1].split('.')[0]}-audio"
      src="./sounds/${image.split('.')[0]}.mp3">
    </audio>
    `;
  }

  flipToBack(): Promise<void> {
    this.isFlipped = true;
    return this.flip(true);
  }

  flipToFront(): Promise<void> {
    this.isFlipped = false;
    return this.flip();
  }

  private flip(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(FLIP_CLASS, isFront);
      this.element.addEventListener('click', () => resolve(), {
        once: true,
      });
      this.element.addEventListener('mouseleave', () => {
        this.element.classList.toggle(FLIP_CLASS, false);
      });
    });
  }
}
