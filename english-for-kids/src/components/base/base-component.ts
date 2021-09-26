import './base-component.scss';

export class BaseComponent {
  readonly element: HTMLElement;

  constructor(tag: keyof HTMLElementTagNameMap = 'main', className: string[] = ['main-category-links']) {
    this.element = document.createElement(tag);
    this.element.classList.add(...className);
  }

  setID(): void {
    this.element.setAttribute('id', 'current-page');
  }
}
