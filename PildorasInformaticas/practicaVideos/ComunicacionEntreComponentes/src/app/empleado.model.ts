export class empleado {
  /**
   * @constructor
   * @param nombre
   * @param apellido
   * @param salario
   * @param cargo
   */
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

  nombre: string = '';
  apellido: string = '';

  cargo: string = '';
  salario: number = 0;
}
