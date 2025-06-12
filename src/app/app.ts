import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from "./button/button";
import { Form } from "./form/form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Form],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'prueba-angular';
}
