import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../app/user.service';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  
 


  ngOnInit(): void {
    const id = this.route.snapshot.params['id']; // Obtener el ID de los parámetros de la ruta
    if (id) {
      this.userService.obtenerUsuarioPorId(id).subscribe(usuario => {
        // Asigna los valores obtenidos del servicio al formulario
        this.usuarioForm.patchValue({
          nombre: usuario.nombre,
          
          // Agrega más campos si los tienes en el modelo
        });
      });
    }

  guardarUsuario(): void {
    if (this.usuarioForm.valid) {
      const datosUsuario = this.usuarioForm.value;
      if (this.usuarioId) {
        // Lógica para actualizar el usuario
        this.userService.actualizarUsuario(this.usuarioId, datosUsuario).subscribe(() => {
          this.router.navigate(['/usuarios']);
        });
      } else {
        // Lógica para crear un nuevo usuario
        this.userService.crearUsuario(datosUsuario).subscribe(() => {
          this.router.navigate(['/usuarios']);
        });
      }
    }
  }
}


