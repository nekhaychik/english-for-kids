import { Header } from '../header';
import './navigation-admin.scss';

export class NavigationAdmin extends Header {
  private nav: NavigationAdmin[] = [];

  constructor() {
    super('div', ['nav__list-admin']);
    this.element.setAttribute('id', 'header-menu');
    this.element.innerHTML = `
      <ul class="nav-admin">
        <a href="#admin-categories" class="nav-admin__li-background">
          <p class="nav-admin__li-text" id="menu-main-page">Categories</p>
        </a>
        <a href="#admin-cards" class="nav-admin__li-background">
            <p class="nav-admin__li-text" id="menu-animals">Cards</p>
        </a>
        <button>Log Out</button>
      </ul>
    `;
  }

  async addNav(): Promise<void> {
    this.nav.forEach((nav) => this.element.appendChild(nav.element));
  }
}
