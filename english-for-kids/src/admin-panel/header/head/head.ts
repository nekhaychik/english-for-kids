import { Header } from '../header';
import { HeaderWrapper } from '../wrapper/wrapper';

export class HeadAdmin extends Header {
  private readonly headerWrapper: HeaderWrapper;

  constructor() {
    super();
    this.headerWrapper = new HeaderWrapper();
    this.element.appendChild(this.headerWrapper.element);
  }

  async addHeader(): Promise<HTMLElement> {
    this.headerWrapper.addHeaderElements();
    return this.element;
  }
}
