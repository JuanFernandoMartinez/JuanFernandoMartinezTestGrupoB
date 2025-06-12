import { Component } from '@angular/core';
import { Button } from "../button/button";
import { FormInput } from '../form-input/form-input';

@Component({
  selector: 'app-form',
  imports: [Button, FormInput],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {

}
