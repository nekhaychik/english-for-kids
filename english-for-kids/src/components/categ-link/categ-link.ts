import './categ-link.scss';
import { BaseComponent } from '../base/base-component';

export class CategoryLink extends BaseComponent {
  constructor(readonly image: string) {
    super('a', ['category-container']);
    this.element.setAttribute('href', `#${image.split('category-links/')[1].split('.')[0]}`);
    this.element.innerHTML = `
    <div class="category">
      <div class="category-image" style="background-image: url('./images/${image}')"></div>
      <div class="category-title">${image.split('category-links/')[1].split('.')[0]}</div>
      </div>
    `;
  }
}
