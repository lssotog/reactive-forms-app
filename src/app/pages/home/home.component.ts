import { Component } from '@angular/core';
import { HomeFormComponent } from '../../components/molecules/home-form/home-form.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeFormComponent,
    MatCardModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
