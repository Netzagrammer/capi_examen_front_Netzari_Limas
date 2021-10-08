import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  ObtenerUsuarios(){
    return this.http.get('http://localhost:8000/usuarios');
  }
}
