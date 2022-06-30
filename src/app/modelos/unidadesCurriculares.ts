import { Materia } from "./Materia";
import { Previa } from "./Previa";

export class UnidadesCurriculares {
  public id: string;
  public nombre: string;
  public descripcion: string;
  public creditos: string;
  public documento: string;
  public semestre: string;
  public materia: Materia[];
  public previas: Previa[];

  constructor(id: string, nombre: string, descripcion: string, creditos: string, documento: string, semestre: string, materia: Materia[], previas: Previa[]) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.creditos = creditos;
    this.documento = documento;
    this.semestre = semestre;
    this.materia = materia;
    this.previas = previas;
  }
}