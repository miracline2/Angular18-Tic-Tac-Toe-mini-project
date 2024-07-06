import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-x-o-button',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './x-o-button.component.html',
  styleUrl: './x-o-button.component.sass'
})
export class XOButtonComponent {
  @Input()
  value!: 'X' | 'O';
}
