import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TicketService } from './ticket.service'; // Importa tu servicio aquí

@NgModule({
  declarations: [
   
    // Declara otros componentes aquí si es necesario
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Importa HttpClientModule aquí
  ],
  providers: [TicketService], // Añade el servicio en providers
 
})
export class AppModule { }
