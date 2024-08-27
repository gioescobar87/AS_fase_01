import { HashServiceService } from './../servicios/hash-service.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  persona : any = {};

  constructor(private  http:HttpClient , private hashService:HashServiceService) { }

  ngOnInit(): void {



  }

  iniciarSesion(){
    let formFormulario:any = document.getElementById("formUsuario");
    let formValido:boolean = formFormulario.reportValidity();
    if(formValido){
      this.iniciarSesionServicio().subscribe(
        (response:any) => this.redirigir(response)
      )
    }
  }

  iniciarSesionServicio() {
    var httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json' }
      )
    };
    this.persona.password = this.hashService.generateMD5Hash(this.persona.password)
    const credenciales = {
      username: this.persona.usuario,
      password: this.persona.password
    };
    return this.http.post<any>("http://127.0.0.1:8081/api/Usuario/login", credenciales, httpOptions)
      .pipe(
        catchError(e => "error")
      );
  }


  redirigir( respuesta: any){
   console.log(respuesta)
   return respuesta
  }


}
