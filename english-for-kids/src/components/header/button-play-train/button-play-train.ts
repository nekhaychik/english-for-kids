import { Header } from '../header';
import './button-play-train.scss';

export class ButtonPlayTrain extends Header {
  private readonly buttonPlayTrain: ButtonPlayTrain[] = [];

  constructor() {
    super('div', ['button__play-train']);
    this.element.innerHTML = `
      <input type="checkbox" class="checkbox" id="checkbox">
      <label for="checkbox" class="checkbox-label"></label>
      <span class="train">Train</span>
      <span class="play">Play</span>
      <span class="switch-background"></span>
    `;
  }

  async addButtonPlayTrain(): Promise<void> {
    this.buttonPlayTrain.forEach((button) => this.element.appendChild(button.element));
  }
}
