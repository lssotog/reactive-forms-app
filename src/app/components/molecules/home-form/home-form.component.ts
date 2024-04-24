import { Component, forwardRef, inject } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { InputComponent } from '../../atoms/input/input.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-form',
  standalone: true,
  imports: [ 
    InputComponent,
    ButtonComponent, 
    MatCardModule,
    MatFormFieldModule, 
    ReactiveFormsModule
  ],
  
  templateUrl: './home-form.component.html',
  styleUrl: './home-form.component.scss'
})
export class HomeFormComponent {
  
  formGroup1 = new FormGroup({
    email1: new FormControl (''),
    mfa1: new FormControl (''),
  });

  homeSendInfo(event:any): void{
    // debugger;
    console.log(this.formGroup1.controls.email1.value);
    console.log("-----> Evento",event)
  }
}
