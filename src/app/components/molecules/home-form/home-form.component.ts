import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
// -----
import { ButtonComponent } from '../../atoms/button/button.component';
import { InputComponent } from '../../atoms/input/input.component';

@Component({
  selector: 'app-home-form',
  standalone: true,
  imports: [ 
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    MatCardModule
  ],
  
  templateUrl: './home-form.component.html',
  styleUrl: './home-form.component.scss'
})
export class HomeFormComponent {
  formGroup1 = new FormGroup({
    check: new FormControl (false, [Validators.requiredTrue]),
    email1: new FormControl ('', [Validators.required]),
    mfa1: new FormControl (''),
  });

  onSubmit(): void{
    if (this.formGroup1.valid) {
      console.log(this.formGroup1.value);
    }
  }
}
