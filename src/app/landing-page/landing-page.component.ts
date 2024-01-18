import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { Router } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    MatCardModule, 
    MatButtonModule,
    NavigationBarComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  longText = "Blockchain Technology-based voting platform for safe, transparent, and efficient voting for Elections in Indonesia. We aim to increase confidence in the electoral process, encouraging participation and contributing to a more democratic society"

  constructor(private router: Router) {}

  navigateToRegist() {
    this.router.navigate(['/regist']);
  }
}
