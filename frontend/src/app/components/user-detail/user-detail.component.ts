import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; 

import {Usuario} from "../../../app/models/usuario.model";
import { UserService } from '../../../app/user.service';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {

  usuario: Usuario | undefined;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {const id = this.route.snapshot.params['id'];
    this.userService.obtenerUsuarioPorId(id).subscribe(usuario => {
      this.usuario = usuario;
    });
  }



}
