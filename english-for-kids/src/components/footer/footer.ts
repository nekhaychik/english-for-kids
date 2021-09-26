import './footer.scss';

export abstract class Footer {
  readonly element: HTMLElement;

  constructor(tag: keyof HTMLElementTagNameMap = 'footer', styles: string[] = ['footer']) {
    this.element = document.createElement(tag);
    this.element.classList.add(...styles);
  }

  start(): HTMLElement {
    return this.element;
  }
}
