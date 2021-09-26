import './categ-field.scss';
import { BaseComponent } from '../base/base-component';
import { CategoryLink } from '../categ-link/categ-link';

export class CategoriesField extends BaseComponent {
  private categories: CategoryLink[] = [];

  constructor() {
    super('div', ['category-field']);
  }

  clear(): void {
    this.categories = [];
    this.element.innerHTML = '';
  }

  addCategoryLinks(categories: CategoryLink[]): void {
    this.categories = categories;
    this.categories.forEach((category) => this.element.appendChild(category.element));
  }
}
