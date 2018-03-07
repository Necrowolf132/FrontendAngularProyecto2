import { Component} from '@angular/core';
import {ManejadortokenService} from '../service/tokens/manejadortoken.service';
import { Router } from '@angular/router';
import { RootScope } from './../service/intercomunicadores/tuberias';
declare var $: any;


@Component({
  selector: 'app-inicio',
  templateUrl: './app.inicio.html',
  styleUrls: ['./app.inicio.css']
})
export class AppInicio {
  animacion: any;
  Sesion: object | null;
  constructor(TokenIniciado: ManejadortokenService, private Rutaactual: Router) {
    this.Sesion = TokenIniciado.sacar(true);
    setTimeout(() => {
      this.poner();
    }, 500);
  }



  public poner() {
    this.animacion = 'poner';
    setTimeout(() => {
      this.quitar();
    }, 3000);
  }
  public quitar() {
    this.animacion = 'quitar';
    setTimeout(() => {
      if (this.Sesion !== null) {
        console.log(this.Sesion);
      } else {
        RootScope.pasoPorInicio = true;
        this.Rutaactual.navigate(['/login']);
      }
    }, 1000);
  }

 }






