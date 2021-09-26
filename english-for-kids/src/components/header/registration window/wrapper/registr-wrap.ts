import { BaseComponent } from '../../../base/base-component';
import { FormRegistration } from '../form/registr-form';
import './registr-wrap.scss';

export class ModalWindowWrapper extends BaseComponent {
  private readonly formRegistr: FormRegistration;

  constructor() {
    super('div', ['iw-modal']);
    this.element.setAttribute('id', 'iw-modal');
    this.formRegistr = new FormRegistration();
    this.element.appendChild(this.formRegistr.element);
  }

  addForm(): void {
    this.formRegistr.addFormRegistr();
  }
}
