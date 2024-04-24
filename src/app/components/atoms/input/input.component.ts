import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'my-input',
  standalone: true,
  imports: [MatInput, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() placeholderTxt : string = '';
  @Input() controlInputAtom : FormControl = new FormControl();
}
