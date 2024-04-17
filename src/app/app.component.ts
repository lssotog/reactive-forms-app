import { Component, Input, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { FormBuilder , ReactiveFormsModule } from '@angular/forms';
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
  formGroup = this.formBuilder.group({
    names: [''],
    lastName: [''],
    email: [''],
    password: [''],
    confirmPassword: ['']
  });
  constructor(private formBuilder: FormBuilder) {}
  
  clickRegister(): void {
    this.userName = `The user name is ${this.formGroup.controls.names.value}`;
    console.log("name value --->", this.userName);
  }
}
 