import { Component } from '@angular/core';

// PrimeNG
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from "primeng/button";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DrawerModule,
    ButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  visible: boolean = false;
}
