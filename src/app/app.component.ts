import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,     
    MatButton,
    MatCardModule, 
    MatFormFieldModule, 
    MatIcon,
    MatInput, 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reactive-forms-app'
  clickRegister(): void {}
}
 