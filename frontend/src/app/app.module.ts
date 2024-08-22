import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // Solo necesitas importar ReactiveFormsModule
import { AppComponent } from './app.component';
import { TicketService } from './ticket.service'; // Importa tu servicio aquí
import { UserService } from './user.service';
import { UserFormComponent } from './components/user-form/user-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent
    
    // Declara otros componentes aquí si es necesario, como UserFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule // Asegúrate de que ReactiveFormsModule está aquí
  ],
  providers: [TicketService], // Añade el servicio en providers
  bootstrap: [AppComponent] // El componente principal que arranca tu aplicación
})
export class AppModule { }
