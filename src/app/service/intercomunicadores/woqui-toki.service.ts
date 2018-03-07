import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WoquiTokiService {

  constructor() { }

  // Observable string sources
  private WoquiTokiLogin = new Subject<boolean>();
  private WoquiTokiNuevo = new Subject<string>();

  // Observable string streams
  WoquiTokiLoginEnLinea$ = this.WoquiTokiLogin.asObservable()
  WoquiTokiNuevoEnLinea$ = this.WoquiTokiNuevo.asObservable();

  // Service message commands
  public comunicarLogin(mission: boolean) {
    this.WoquiTokiLogin.next(mission);
  }

  public comunicarNuevo(mission: string) {
    this.WoquiTokiNuevo.next(mission);
  }
}

