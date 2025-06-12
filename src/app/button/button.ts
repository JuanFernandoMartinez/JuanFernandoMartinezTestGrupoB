import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  styleUrls: ['./button.css']
})
export class Button {
  @Input() text: string = '';
  @Input() type: 'primary' | 'secondary' = 'primary';
}
