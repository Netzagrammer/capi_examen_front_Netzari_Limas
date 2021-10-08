import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TablaUsuariosComponent } from './tabla-usuarios.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TablaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [TablaUsuariosComponent]
})
export class AppModule { }
