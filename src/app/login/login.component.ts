import { Component, OnInit } from '@angular/core';
import {ManejadortokenService} from '../service/tokens/manejadortoken.service';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(TokenIniciado: ManejadortokenService) { }

  ngOnInit() {
    $('.panelcentrador').hide();
    setTimeout(() => {
      $('.panelcentrador').fadeIn(1000);
    }, 500);

  }

}
