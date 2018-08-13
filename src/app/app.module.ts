import { ListadoService } from './services/listado.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListadoComponent } from './components/listado/listado.component';
import { ContadorComponent } from './components/contador/contador.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    ContadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ListadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
