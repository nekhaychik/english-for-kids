import './header-admin.scss';

export abstract class Header {
  readonly element: HTMLElement;

  constructor(tag: keyof HTMLElementTagNameMap = 'header', styles: string[] = ['header__admin']) {
    this.element = document.createElement(tag);
    this.element.classList.add(...styles);
  }

  start(): HTMLElement {
    return this.element;
  }
}
