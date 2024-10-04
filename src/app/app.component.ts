import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// PrimeNG
import { PrimeNGConfig } from 'primeng/api';
import { Aura } from 'primeng/themes/aura';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // PrimeNG components
    ButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'primeng18';

  constructor(private config: PrimeNGConfig) {
    this.config.theme.set({ preset: Aura });
  }

  ngOnInit() {
    this.config.ripple.set(true);
  }
}
