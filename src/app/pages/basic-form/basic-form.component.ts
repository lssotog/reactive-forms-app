import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.scss'
})
export class BasicFormComponent {
  formGroup = new FormGroup({
    email: new FormControl('', { validators: [Validators.required, Validators.email]} ),
    password: new FormControl('', { validators: Validators.required })
  });
  clockLogin():void {
    console.log("email ----->", this.formGroup.get('email')?.value as string);
  }
}
