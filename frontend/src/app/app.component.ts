import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuSoporteComponent } from './menu-soporte/menu-soporte.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MenuSoporteComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  sesionValida: boolean = false;

  constructor() {
    this.sesionValida = false //this.checkSession();
  }

  checkSession(): boolean {
    // Implementa la lógica para verificar si la sesión es válida
    return true; // Devuelve true o false según tu lógica
  }
}
