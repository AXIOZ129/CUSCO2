import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { FuncionaComponent } from './components/funciona/funciona.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { HistorialComponent } from './components/historial/historial.component';
import { AjustesComponent } from './components/ajustes/ajustes.component';
import { CambiarCodeComponent } from './components/cambiar-code/cambiar-code.component';
import { HistorialEntradaComponent } from './components/historial-entrada/historial-entrada.component';
import { HistorialSalidaComponent } from './components/historial-salida/historial-salida.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    FuncionaComponent,
    EstadisticasComponent,
    HistorialComponent,
    AjustesComponent,
    CambiarCodeComponent,
    HistorialEntradaComponent,
    HistorialSalidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
