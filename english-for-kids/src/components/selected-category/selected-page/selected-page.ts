import { cardHandler, checkPlayTrain, startGame } from '../../../functions';
import { BaseComponent } from '../../base/base-component';
import { StartGameButton } from '../btn-start/btn-start';
import { CardsField } from '../cards-field/cards-field';
import { Card } from '../cards/cards';
import { Rating } from '../rating/rating';

export class SelectedCategoryPage extends BaseComponent {
  private readonly cardsField: CardsField;

  private readonly startGameButton: StartGameButton;

  private readonly rating: Rating;

  constructor() {
    super();
    this.rating = new Rating();
    this.element.appendChild(this.rating.element);
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);
    this.startGameButton = new StartGameButton();
    this.element.appendChild(this.startGameButton.element);
  }

  addSelectedCategoryPage(images: string[], translations: string[], sounds: string[]): void {
    this.cardsField.clear();
    const card: Card[] = [];
    for (let i = 0; i < images.length; i++) {
      card[i] = new Card(images[i], translations[i], sounds[i]);
    }
    this.cardsField.addCards(card);
    this.startGameButton.addStartGameButton();
    for (let i = 0; i < images.length; i++) {
      cardHandler(images[i], card[i]);
    }
    startGame();
    checkPlayTrain();
  }
}
