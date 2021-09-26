import { BaseComponent } from '../../../base/base-component';
import './registr-form.scss';

export class FormRegistration extends BaseComponent {
  private formRegistr: FormRegistration[] = [];

  constructor() {
    super('form', ['iw-modal__form']);
    this.element.setAttribute('id', 'form-registration');
    this.element.innerHTML = `
      <div class="iw-modal__CSS-inner">
        <div class="iw-modal__header">
          <h3 class="iw-modal__title">Login</h3>
        </div>
        <div class="iw-modal__text">    
          <p><input name="login" id="login" type="text" placeholder="login" 
            class="iw-modal__text-input"></p>
          
          <p>
            <input name="password" id="password" type="password" placeholder="password" class="iw-modal__text-input">
          </p>
        </div>
        <div class="form-button"> 
          <a href="#main-page" id="cancle" class="iw-modal__btn-close">CANCEL</a>
          <a href="#admin-panel" id="addUser" type="button" class="iw-modal__btn-add">ADD USER</a>
        </div>
      </div>
    `;
  }

  async addFormRegistr(): Promise<void> {
    this.formRegistr.forEach((form) => this.element.appendChild(form.element));
  }
}
