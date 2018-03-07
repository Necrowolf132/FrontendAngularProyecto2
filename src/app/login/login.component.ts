import { Component, OnInit, ViewChild } from '@angular/core';
import {ManejadortokenService} from '../service/tokens/manejadortoken.service';
import {NgForm, NgModel} from '@angular/forms';
import { Router } from '@angular/router';
import { RootScope } from './../service/intercomunicadores/tuberias';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  estadoNombre: string;
  estadoClave: string;
  actividadBtn: string;
  invalidoPor: string;
  acc1: string;
  acc2: string;
  Redirigir = false;
  ParametrosLogin = {
    usuario: '',
    calve: ''
  };
  submitted = false;

  @ViewChild('formulario1') formulario1: NgForm;
  @ViewChild('usuario') usuario: NgModel;
  @ViewChild('clave') clave: NgModel;

  constructor(TokenIniciado: ManejadortokenService, private route: Router) {
    this.estadoNombre, this.estadoClave, this.acc1, this.acc2, this.invalidoPor = '';
    this.actividadBtn = 'disabled';
  }


  ngOnInit() {
    if (!RootScope.pasoPorInicio) {
      this.route.navigate(['']);
    }
    $('.row.scale-transition.scale-out').hide();
    $('.panelcentrador').hide();
    setTimeout(() => {
      $('.panelcentrador').fadeIn(1000);
    }, 500);
    this.diagnostic();
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.Redirigir);
    if (this.ParametrosLogin.usuario === 'jese' && this.ParametrosLogin.calve === '25448132') {
        this.route.navigate(['/dash']);
    } else {
      this.invalidoPor = 'El usuario o la contraseña no se encuentran registrados ';
      $('.row.scale-transition.scale-out').show().addClass('scale-in');
      setTimeout(()=>{
        $('.row.scale-transition.scale-out').removeClass('scale-in').fadeOut();
      }, 6000);
    }
  }

  public diagnostic() {
      let sePuede1 = false;
      let sePuede2 = false;
    const Expre: any = /([\s|\W]+)/;
      this.usuario.valueChanges.subscribe(
        value => {
          if (!this.usuario.pristine) {
              if (value === '' || null != value.match(Expre) ) {
                const valorMomento = value.match(Expre);
                this.estadoNombre = 'invalid';
                this.acc1 = 'accion';
                if (value === '') {
                  this.invalidoPor = 'Ningun campo puede quedar vacio';
                } else if (-1 !== valorMomento[0].search(/([\s]+)/)) {
                  this.invalidoPor = 'Ningun campo puede contener espacios en blanco';
                } else {
                  this.invalidoPor = 'El caracter " ' + valorMomento[0] + ' " no es valido';
                }
                $('.row.scale-transition.scale-out').show().addClass('scale-in');
                sePuede1 = false;
                this.actividadBtn = 'disabled';
              } else {
                sePuede1 = true;
                this.estadoNombre = 'valid';
                if (sePuede1 && sePuede2) {
                  $('.row.scale-transition.scale-out').removeClass('scale-in').fadeOut();
                  this.actividadBtn = '';
                }
              }
          }
        }
      );
      this.clave.valueChanges.subscribe(
        value => {
          if (!this.clave.pristine) {
              if (value === '' || null != value.match(Expre)) {
                const valorMomento = value.match(Expre);
                this.acc2 = 'accion';
                this.estadoClave = 'invalid';
                if (value === '') {
                  this.invalidoPor = 'Ningun campo puede quedar vacio';
                } else if (-1 !== valorMomento[0].search(/([\s]+)/)) {
                  this.invalidoPor = 'Ningun campo puede contener espacios en blanco';
                } else {
                  this.invalidoPor = 'El caracter " ' + valorMomento[0] + ' " no es valido';
                }
                $('.row.scale-transition.scale-out').show().addClass('scale-in');
                this.actividadBtn = 'disabled';
                sePuede2 = false;
              } else {
                sePuede2 = true;
                this.estadoClave = 'valid';
                if (sePuede1 && sePuede2) {
                  $('.row.scale-transition.scale-out').removeClass('scale-in').fadeOut();
                  this.actividadBtn = '';
                }
              }
          }
        }
      );
  }
}

