export class Documento {
    public id: string;
    public titulo: string;
    public tipo: string;
    public documentoPDF: string;
    public activo: boolean;
  
    constructor(id: string, titulo: string, tipo: string, documentoPDF: string, activo: boolean) {
      this.id = id;
      this.titulo = titulo;
      this.tipo = tipo;
      this.documentoPDF = documentoPDF;
      this.activo = activo;
    }
}