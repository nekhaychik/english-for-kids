import { Footer } from '../footer';
import './links.scss';

export class Links extends Footer {
  private readonly links: Links[] = [];

  constructor() {
    super('div', ['links']);
    this.element.innerHTML = `
      <a href="https://github.com/nekhaychik" class="links__github">GitHub nekhaychik</a>
      <a href="https://rs.school/" class="links__rsschool">RS School, 2021</a>
    `;
  }

  async addLinks(): Promise<void> {
    this.links.forEach((link) => this.element.appendChild(link.element));
  }
}
