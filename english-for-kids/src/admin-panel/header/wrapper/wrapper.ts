import { Header } from '../header';
import { NavigationAdmin } from '../navigation/navigation';

export class HeaderWrapper extends Header {
  private readonly nav: NavigationAdmin;

  constructor() {
    super('div', ['header__wrapper']);
    this.nav = new NavigationAdmin();
    this.element.appendChild(this.nav.element);
  }

  async addHeaderElements(): Promise<void> {
    this.nav.addNav();
  }
}
