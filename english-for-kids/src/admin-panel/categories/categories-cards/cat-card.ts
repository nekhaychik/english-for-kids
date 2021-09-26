import { BaseComponent } from '../../../components/base/base-component';
import './cat-cards.scss';

export interface CardsAdmin {
  name: string;
  amount: number;
}

export class AdminCategoryCard extends BaseComponent {
  constructor(readonly card: CardsAdmin) {
    super('div', ['category-card__admin']);
    this.element.innerHTML = `

    <div class="category-admin">
    <div class="exit-wrapper">
      <p class="exit-btn">x</p>
    </div>
      <div class="category-admin__title">${card.name}</div>
      <div class="category-admin__amount">WORDS: &nbsp; <b>${card.amount}</b></div>
      <div class="category-admin__button">
        <button class="update-category">Update</button>
        <button class="add-word-category">Add word</button>
      </div>
    </div>
    `;
  }
}
