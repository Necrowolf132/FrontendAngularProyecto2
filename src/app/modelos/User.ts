import {Datos} from './modeloPrueba';

export class User {
  nombre: string;
  apellido: string;
  Idusuario: number;
  Roll: number;
  opcional: {
    opcion1: string,
    opcion2: string
  };

  constructor() {

  }
  public traerinfo(usuario: string, clave: string) {
    console.log('traje de la base de datos');
    if (clave === '25448132' && usuario === 'jese') {
      this.nombre = Datos.nombre;
      this.apellido = Datos.apellido;
      this.Idusuario = Datos.Idusuario;
      this.Roll = Datos.Roll;
      this.opcional = { opcion1: Datos.opcional.opcion1, opcion2: Datos.opcional.opcion2 };
    }

  }
}
