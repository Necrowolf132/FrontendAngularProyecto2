import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { CONFIG } from './../../configuraciones/config';
declare  var KJUR, KEYUTIL: any;
@Injectable()
export class ManejadortokenService {
  palabraClave: string;
  jwtAyuda: JwtHelper = new JwtHelper();
  PublicKey: any;
  constructor() {
    this.palabraClave = 'app1-systema2.0';
    this.PublicKey = KEYUTIL.getKey(CONFIG.publicKey);
  }

  public sacar(Estoken: boolean = false, keys?: string, ): object|null {
    if (keys === undefined) {
      keys = this.palabraClave;
    }
    let valor: any = localStorage.getItem(keys);
    if (typeof(valor) === 'string') {
      if (Estoken) {
        const isValid = KJUR.jws.JWS.verifyJWT(valor, this.PublicKey, CONFIG.jwtValidatorParametros);
        if (isValid) {
          const expiro = this.jwtAyuda.isTokenExpired(valor);
          if (!expiro) {
            valor = this.jwtAyuda.decodeToken(valor);
          } else {
            valor = null;
            localStorage.removeItem(keys);
          }
        } else {
          valor = null;
          localStorage.removeItem(keys);
        }
      } else {
        valor = JSON.parse(valor);
      }
      return valor;
    } else {
      return valor;
    }
  }
}
