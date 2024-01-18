import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-tps-registtration',
  standalone: true,
  imports: [
    NavigationBarComponent,
    MatCardModule, 
    MatDividerModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
  ],
  templateUrl: './tps-registtration.component.html',
  styleUrl: './tps-registtration.component.css'
})
export class TpsRegisttrationComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      kota: ['', Validators.required],
      kecamatan: ['', Validators.required],
      kelurahan: ['', Validators.required]
    });
  }

  navigateToAdmin() {
    this.router.navigate(['/admin']);
  }
}
