import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { PainelComponent } from './modules/painel/painel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SobreMimComponent } from './modules/sobre-mim/sobre-mim.component';
import { ProjetosComponent } from './modules/projetos/projetos.component';
import { RodaPeComponent } from './modules/roda-pe/roda-pe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PainelComponent,
    SobreMimComponent,
    ProjetosComponent,
    RodaPeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
