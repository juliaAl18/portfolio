import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PainelComponent } from './modules/painel/painel.component';
import { SobreMimComponent } from './modules/sobre-mim/sobre-mim.component';
import { ProjetosComponent } from './modules/projetos/projetos.component';
import { RodaPeComponent } from './modules/roda-pe/roda-pe.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: "full", redirectTo: 'home' },
  { path: 'painel', component: PainelComponent },
  { path: 'sobre-mim', component: SobreMimComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'roda-pe', component: RodaPeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
