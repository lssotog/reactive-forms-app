import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';


@Component({
  selector: 'app-material-first',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButton,
    MatCardModule, 
    MatFormFieldModule, 
    MatIcon,
    MatInput,   
  ],
  templateUrl: './material-first.component.html',
  styleUrl: './material-first.component.scss'
})
export class MaterialFirstComponent {
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
