import './header.scss';

export abstract class Header {
  readonly element: HTMLElement;

  constructor(tag: keyof HTMLElementTagNameMap = 'header', styles: string[] = ['header']) {
    this.element = document.createElement(tag);
    this.element.classList.add(...styles);
  }

  start(): HTMLElement {
    return this.element;
  }
}
