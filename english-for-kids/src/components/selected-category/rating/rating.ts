import { BaseComponent } from '../../base/base-component';
import './rating.scss';

export class Rating extends BaseComponent {
  constructor() {
    super('div', ['rating-wrapper']);
    this.element.setAttribute('id', 'rating');
  }
}
