import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  imports: [],
  templateUrl: './form-input.html',
  styleUrl: './form-input.css'
})
export class FormInput {
  @Input() label: string = '';
  @Input() type: 'text' | 'paragraph' | 'select' = 'text';
  @Input() options: string[] = [];
  @Input() placeholder: string = '';

}
