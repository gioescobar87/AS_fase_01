import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderModule } from './header/header.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
}
