import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MaterialFirstComponent } from './pages/material-first/material-first.component';
import { BasicFormComponent } from './pages/basic-form/basic-form.component';
import { HeaderComponent } from './components/organisms/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'reactive-forms-app';
}
 