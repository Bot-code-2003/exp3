import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,

  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  userData = {
    name: '',
    email: '',
  };

  onSubmit() {
    console.log(this.userData);
  }
}
