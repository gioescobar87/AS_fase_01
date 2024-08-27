import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TicketService } from './ticket.service'; // Importa tu servicio aquí
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [

    // Declara otros componentes aquí si es necesario
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Importa HttpClientModule aquí
  ],
  providers: [
    TicketService,
    provideHttpClient(withFetch()) ], // Añade el servicio en providers

})
export class AppModule { }




