import { Header } from '../header';
import './button-menu.scss';

export class ButtonMenu extends Header {
  private readonly buttonMenu: ButtonMenu[] = [];

  constructor() {
    super('div', ['button-menu']);
    this.element.innerHTML = `
    <div class="header__burger" id="btn-burger">
      <span class="burger__line burger__line-1"></span>
      <span class="burger__line burger__line-2"></span>
      <span class="burger__line burger__line-3"></span>
    </div>
    <div class="header__exit" id="btn-exit">
      <span class="exit">x</span>
    </div>
    `;
  }

  listen: () => void = () => {
    const btnBurger = <HTMLButtonElement>document.getElementById('btn-burger');
    const btnExit = <HTMLButtonElement>document.getElementById('btn-exit');
    const btnLogIn = <HTMLButtonElement>document.getElementById('log-in');
    const headerMenu = <HTMLElement>document.getElementById('header-menu');
    btnBurger.addEventListener('click', () => {
      btnBurger.style.display = 'none';
      btnExit.style.display = 'block';
      headerMenu.setAttribute('class', 'nav__list nav__list-active');
    });
    btnExit.addEventListener('click', () => {
      btnExit.style.display = 'none';
      btnBurger.style.display = 'block';
      headerMenu.setAttribute('class', 'nav__list');
    });
    btnLogIn.addEventListener('click', () => {
      btnExit.style.display = 'none';
      btnBurger.style.display = 'block';
      headerMenu.setAttribute('class', 'nav__list');
    });
  };

  async addButtonMenu(): Promise<void> {
    this.buttonMenu.forEach((button) => this.element.appendChild(button.element));
    this.listen();
  }
}
