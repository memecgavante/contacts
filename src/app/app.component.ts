import {Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  
  
})
export class AppComponent {
  title = 'contacts';
}
