import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {
  usuarios: Usuario[];
  constructor(private userService: UsuariosService){

  }

  ngOnInit() {
    this.ObtenerUsuarios();
  }

  ObtenerUsuarios(){
    this.userService.ObtenerUsuarios().subscribe((data: Usuario[]) => {
      this.usuarios = data;

      console.log(this.usuarios);
    })
  }
  
}
