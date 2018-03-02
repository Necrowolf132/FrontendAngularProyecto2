import { Component, OnInit } from '@angular/core';
import {ManejadortokenService} from '../service/tokens/manejadortoken.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(TokenIniciado: ManejadortokenService) { }

  ngOnInit() {
  }

}
