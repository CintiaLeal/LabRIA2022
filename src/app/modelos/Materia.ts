export class Materia {
  public id: string;
  public nombre: string;
  public descripcion: string;
  public creditosMinimos: string;

  constructor(id: string, nombre: string, descripcion: string,  creditosMinimos: string) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.creditosMinimos = creditosMinimos;
  }
 
}