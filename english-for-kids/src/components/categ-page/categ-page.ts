import { BaseComponent } from '../base/base-component';
import { CategoriesField } from '../categ-field/categ-field';
import { CategoryLink } from '../categ-link/categ-link';

export class CategoriesPage extends BaseComponent {
  private readonly categoriesField: CategoriesField;

  constructor() {
    super();
    this.categoriesField = new CategoriesField();
    this.element.appendChild(this.categoriesField.element);
  }

  addCatigoriesPage(images: string[]): void {
    this.categoriesField.clear();
    const categories = images.map((url) => new CategoryLink(url));
    this.categoriesField.addCategoryLinks(categories);
  }
}
