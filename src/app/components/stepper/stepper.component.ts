import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { StepsModule } from 'primeng/steps';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [
    StepperModule,
    ButtonModule,
    StepsModule
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {
  activeStep: number = 0;
}
