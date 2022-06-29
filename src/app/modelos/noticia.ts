export class Noticia {
  public id: string;
  public titulo: string;
  public descripcion: string;
  public imagen: string;
  public fechaCaducidad: string;

  constructor(id: string, titulo: string, descripcion: string, imagen: string, fechaCaducidad: string) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.fechaCaducidad = fechaCaducidad;
  }
}

