import { ButtonMenu } from '../button-menu/button-menu';
import { ButtonPlayTrain } from '../button-play-train/button-play-train';
import { Header } from '../header';
import { Navigation } from '../navigation/navigation';
import { ModalWindowWrapper } from '../registration window/wrapper/registr-wrap';

export class HeaderWrapper extends Header {
  private readonly nav: Navigation;

  private readonly buttonMenu: ButtonMenu;

  private readonly buttonPlayTrain: ButtonPlayTrain;

  private readonly formRegistration: ModalWindowWrapper;

  constructor() {
    super('div', ['header__wrapper']);
    this.nav = new Navigation();
    this.element.appendChild(this.nav.element);
    this.buttonMenu = new ButtonMenu();
    this.element.appendChild(this.buttonMenu.element);
    this.buttonPlayTrain = new ButtonPlayTrain();
    this.element.appendChild(this.buttonPlayTrain.element);
    this.formRegistration = new ModalWindowWrapper();
    this.element.appendChild(this.formRegistration.element);
  }

  async addHeaderElements(): Promise<void> {
    this.nav.addNav();
    this.buttonMenu.addButtonMenu();
    this.buttonPlayTrain.addButtonPlayTrain();
    this.formRegistration.addForm();
  }
}
