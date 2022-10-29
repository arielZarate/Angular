export class empleado {
  //declaracion de las variables
  nombre: string = '';
  apellido: string = '';

  cargo: string = '';
  salario: number = 0;

  constructor(
    nombre: string,
    apellido: string,
    salario: number,
    cargo: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.cargo = cargo;
    this.salario = salario;
  }
}
