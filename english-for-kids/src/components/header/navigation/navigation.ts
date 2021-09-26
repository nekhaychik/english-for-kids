import { Header } from '../header';
import './navigation.scss';

export class Navigation extends Header {
  private nav: Navigation[] = [];

  constructor() {
    super('div', ['nav__list']);
    this.element.setAttribute('id', 'header-menu');
    this.element.innerHTML = `
      <ul class="nav">
        <a href="#main-page" class="nav__li-background">
          <p class="nav__li-text" id="menu-main-page">Main Page</p>
        </a>
        <a href="#animals" class="nav__li-background">
            <p class="nav__li-text" id="menu-animals">Animals</p>
        </a>
        <a href="#food" class="nav__li-background">
            <p class="nav__li-text" id="menu-food">Food</p>
        </a>
        <a href="#nature" class="nav__li-background">
            <p class="nav__li-text" id="menu-nature">Nature</p>
        </a>
        <a href="#clothes" class="nav__li-background">
            <p class="nav__li-text" id="menu-clothes">Clothes</p>
        </a>
        <a href="#actions" class="nav__li-background">
            <p class="nav__li-text" id="menu-actions">Actions</p>
        </a>
        <a href="#education" class="nav__li-background">
            <p class="nav__li-text" id="menu-education">Education</p>
        </a>
        <a href="#weather" class="nav__li-background">
            <p class="nav__li-text" id="menu-weather">Weather</p>
        </a>
        <a href="#home" class="nav__li-background">
            <p class="nav__li-text" id="menu-home">Home</p>
        </a>
        <a href="#iw-modal" class="nav__li-background">
          <p class="nav__li-text" id="log-in">Log in</p>
        </a>
      </ul>
    `;
  }

  async addNav(): Promise<void> {
    this.nav.forEach((nav) => this.element.appendChild(nav.element));
  }
}
