export class Noticia {
  public id: number;
  public titulo: string;
  public descripcion: string;
  public imagen: string;
  public fechaCaducidad: Date;

  constructor(id: number, titulo: string, descripcion: string, imagen: string, fechaCaducidad: Date) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.fechaCaducidad = fechaCaducidad;
  }
}

