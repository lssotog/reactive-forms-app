import { Component, inject } from '@angular/core';
import {  FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.scss'
})
export class BasicFormComponent {
  private readonly _formBuilder = inject(FormBuilder);
  formGroup = this._formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  clockLogin():void {
    console.log("email ----->", this.formGroup.value);
  }
}
