import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppInicio} from './inicio/app.inicio';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { ManejadortokenService } from './service/tokens/manejadortoken.service'

const rutas: Routes = [
    { path:'', component:AppInicio},
    { path:'login',component:LoginComponent}
];

@NgModule(<NgModule>{
  declarations: [
    AppComponent,
    AppInicio,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas,{enableTracing:true}),
  ],
  providers: [ManejadortokenService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
