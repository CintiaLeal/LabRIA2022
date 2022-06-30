export class Materia {
  public id: string;
  public nombre: string;
  public descripcion: string;
  public creditos: string;
  public creditosMinimos: string;

  constructor(id: string, nombre: string, descripcion: string, creditos: string, creditosMinimos: string) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.creditos = creditos;
    this.creditosMinimos = creditosMinimos;
  }
}