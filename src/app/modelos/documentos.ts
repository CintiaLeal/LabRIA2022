export class Documento {
    public id: string;
    public titulo: string;
    public tipo: string;
    public documentoPDF: string;
    public activo: string;
  
    constructor(id: string, titulo: string, tipo: string, documentoPDF: string, activo: string) {
      this.id = id;
      this.titulo = titulo;
      this.tipo = tipo;
      this.documentoPDF = documentoPDF;
      this.activo = activo;
    }
}