import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AjusteComponent } from './components/ajuste/ajuste.component';
import { EditarCodeComponent } from './components/editar-code/editar-code.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { FuncionComponent } from './components/funcion/funcion.component';
import { HistorialEntradaComponent } from './components/historial-entrada/historial-entrada.component';
import { HistorialSalidaComponent } from './components/historial-salida/historial-salida.component';
import { HistorialComponent } from './components/historial/historial.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SobreComponent } from './components/sobre/sobre.component';




const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'historial', component: HistorialComponent, canActivate:[AuthGuard]},
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'funcion', component: FuncionComponent},
  { path: 'estadisticas', component: EstadisticasComponent, canActivate:[AuthGuard]},
  { path: 'editar', component: EditarCodeComponent, canActivate:[AuthGuard]},
  { path: 'ajuste', component: AjusteComponent, canActivate:[AuthGuard]},
  { path: 'sobre', component: SobreComponent},
  { path: 'historialentrada', component: HistorialEntradaComponent, canActivate:[AuthGuard]},
  { path: 'historialsalida', component: HistorialSalidaComponent, canActivate:[AuthGuard]},
  { path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
