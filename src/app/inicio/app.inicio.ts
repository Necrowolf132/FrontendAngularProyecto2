import { Component} from '@angular/core';
import {ManejadortokenService} from '../service/tokens/manejadortoken.service';
import { Router } from '@angular/router'
declare var $:any;


@Component({
  selector: 'app-inicio',
  templateUrl: './app.inicio.html',
  styleUrls: ['./app.inicio.css']
})
export class AppInicio {
  animacion: any

  constructor(TokenIniciado: ManejadortokenService , private Rutaactual : Router) {
    setTimeout(()=>{
      this.poner()
    },500);
  }



  public poner() {
    this.animacion = "poner"
    setTimeout(()=>{
      this.quitar()
    },3000)
  }
  public quitar(){
    this.animacion = "quitar"
    setTimeout(()=>{
      this.Rutaactual.navigate(['/login'])
    },1000)
  }

 }






