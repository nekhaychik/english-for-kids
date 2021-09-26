import { Footer } from '../footer';
import { Links } from '../links/links';

export class Foot extends Footer {
  private readonly links: Links;

  constructor() {
    super();
    this.links = new Links();
    this.element.appendChild(this.links.element);
  }

  async addFooter(): Promise<HTMLElement> {
    this.links.addLinks();
    return this.element;
  }
}
