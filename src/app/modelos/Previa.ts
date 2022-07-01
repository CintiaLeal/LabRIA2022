export class PreviaUC {
  public id: string;
  public unidadCurricular: string;
  public previa: string;
  public tipoPrevia: string;


  constructor(id: string, unidadCurricular: string, previa: string, tipoPrevia: string) {
    this.id = id;
    this.unidadCurricular = unidadCurricular;
    this.previa = previa;
    this.tipoPrevia = tipoPrevia;
  }
}