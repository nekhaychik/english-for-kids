import { BaseComponent } from '../../base/base-component';
import './btn-start.scss';

export class StartGameButton extends BaseComponent {
  private readonly button: StartGameButton[] = [];

  constructor() {
    super('div', ['button__wrapper']);
    this.element.innerHTML = `
      <button class="start-game" id="btn-start">START</button>
      <button class="repeat-game" id="btn-repeat">REPEAT</button>
      <audio class="alert-sounds" id="error-audio" src="./sounds/alert sounds/error.mp3"></audio>
      <audio class="alert-sounds" id="correct-audio" src="./sounds/alert sounds/correct.mp3"></audio>
      <audio class="alert-sounds" id="success-audio" src="./sounds/alert sounds/success.mp3"></audio>
      <audio class="alert-sounds" id="lose-audio" src="./sounds/alert sounds/lose.mp3"></audio>
      <img src="./images/win/win.jpg" alt="WIN" class="win-image" id="win-image">
      <img src="./images/win/lose.jpg" alt="LOSER" class="lose-image" id="lose-image">
      <div id="message"></div>
    `;
  }

  async addStartGameButton(): Promise<void> {
    this.button.forEach((btn) => this.element.appendChild(btn.element));
  }
}
