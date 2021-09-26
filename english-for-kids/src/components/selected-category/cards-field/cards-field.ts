import { BaseComponent } from '../../base/base-component';
import { Card } from '../cards/cards';
import './cards-field.scss';

export class CardsField extends BaseComponent {
  private cards: Card[] = [];

  constructor() {
    super('div', ['cards-field']);
    this.element.setAttribute('id', 'cards-field');
  }

  clear(): void {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: Card[]): void {
    this.cards = cards;
    this.cards.forEach((card) => this.element.appendChild(card.element));
  }
}
