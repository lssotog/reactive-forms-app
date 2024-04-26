import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatFormFieldAppearance } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'my-input',
  standalone: true,
  imports: [MatInput, ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() appearance : MatFormFieldAppearance = 'outline';
  @Input() placeholder : string = '';
  @Input() type : string = 'text';
  @Input() label : string = '';
  @Input() max : number = Infinity;
  @Input() control : FormControl = new FormControl();
}
