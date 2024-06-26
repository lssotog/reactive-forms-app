import { Component, Input, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,     
    MatButton,
    MatCardModule, 
    MatFormFieldModule, 
    MatIcon,
    MatInput, 
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'reactive-forms-app';
  @Input() userName: string = "Reactive forms App";
  formGroup = new FormGroup({
    names: new FormControl('', {validators: Validators.required}),
    lastName: new FormControl('', {validators: Validators.required}),
    email: new FormControl('', {validators: [Validators.required, Validators.email]}),
    password: new FormControl('', {validators: Validators.required}),
    confirmPassword: new FormControl('', {validators: Validators.required})
  });
  
  clickRegister(): void {
    this.userName = `The user name is ${this.formGroup.controls.names.value}`;
    console.log("name value --->", this.userName);
  }
}
 