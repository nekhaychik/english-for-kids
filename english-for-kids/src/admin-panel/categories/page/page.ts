import { BaseComponent } from '../../../components/base/base-component';
import { AdminCategoryCard, CardsAdmin } from '../categories-cards/cat-card';
import { AdminCategoriesField } from '../categories-field/cat-field';

export class AdminCategoriesPage extends BaseComponent {
  private readonly categoriesField: AdminCategoriesField;

  constructor() {
    super();
    this.categoriesField = new AdminCategoriesField();
    this.element.appendChild(this.categoriesField.element);
  }

  addCatigoriesPage(cards: CardsAdmin[]): void {
    this.categoriesField.clear();
    const categories = cards.map((card) => new AdminCategoryCard(card));
    this.categoriesField.addCategoryLinks(categories);
  }
}
