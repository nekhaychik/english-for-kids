import { BaseComponent } from '../../base/base-component';
import './rating.scss';

export class RatingStar extends BaseComponent {
  constructor(type: string) {
    super('img', ['star']);
    this.element.setAttribute('src', `./images/win/${type}.png`);
  }
}
