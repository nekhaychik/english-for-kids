import { BaseComponent } from '../../../components/base/base-component';
import { AdminCategoryCard } from '../categories-cards/cat-card';
import './cat-field.scss';

export class AdminCategoriesField extends BaseComponent {
  private categories: AdminCategoryCard[] = [];

  constructor() {
    super('div', ['category-field__admin']);
  }

  clear(): void {
    this.categories = [];
    this.element.innerHTML = '';
  }

  addCategoryLinks(categories: AdminCategoryCard[]): void {
    this.categories = categories;
    this.categories.forEach((category) => this.element.appendChild(category.element));
  }
}
