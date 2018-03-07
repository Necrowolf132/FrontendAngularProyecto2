import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppInicio} from './inicio/app.inicio';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from  './dash-board/dash-board.component';
import { AppComponent } from './app.component';
import { ManejadortokenService } from './service/tokens/manejadortoken.service';
import { WoquiTokiService } from './service/intercomunicadores/woqui-toki.service';

const rutas: Routes = [
    { path: '', component: AppInicio},
    { path: 'login', component: LoginComponent},
    { path: 'dash', component: DashBoardComponent}
];

@NgModule(<NgModule>{
  declarations: [
    AppComponent,
    AppInicio,
    LoginComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas, {enableTracing: true}),
    FormsModule
  ],
  providers: [ManejadortokenService, WoquiTokiService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
