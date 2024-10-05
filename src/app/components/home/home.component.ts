import { Component, HostListener, OnInit } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

// PrimeNG
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from "primeng/button";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DrawerModule,
    ButtonModule,
    NgClass,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  visible: boolean = false;
  visibleCloseIcon: boolean = false;
  showModalMask: boolean = false;
  shiftMargin: boolean = this.visible;
  screenWidth: number = window.innerWidth;

  ngOnInit() {
    this.checkSidebarVisibility();
  }

  // Escuchar cambio de tamaño en pantalla
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    this.checkSidebarVisibility();
  }

  toggleSidebar() {
    this.visible = !this.visible;
  }

  isVisible(): boolean {
    return this.screenWidth < 992; // Cambia este valor según tus breakpoints
  }

  checkSidebarVisibility() {
    // Establece la visibilidad inicial según el tamaño de la pantalla
    this.visible = this.screenWidth >= 992; // Visibilidad true si es lg o más
    this.visibleCloseIcon = this.screenWidth < 992;
    this.showModalMask = this.screenWidth < 992;
    this.shiftMargin = this.screenWidth >= 992;
  }
}
