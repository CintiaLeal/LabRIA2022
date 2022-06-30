import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { DocumentosService } from 'src/app/servicios/documentos.service';
import { Documento } from 'src/app/modelos/documentos';


interface Tipo {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-documentoadmin',
  templateUrl: './documentoadmin.component.html',
  styleUrls: ['./documentoadmin.component.css']
})
export class DocumentoadminComponent  {
  public documentosIF:Documento[] =[];
  public documentosOL:Documento[] =[];
  public documentosDI:Documento[] =[];
  tipos: Tipo[] = [
    {value: '0', viewValue: 'INFORMACION_CARRERA'},
    {value: '1', viewValue: 'OPORTUNIDADES_LABORALES'},
    {value: '2', viewValue: 'DATOS_DE_INTERES'},
  ];
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder,private service:DocumentosService) { }

  ngOnInit(): void {
    this.service.getDocumentoIC().subscribe({
      next: value => this.documentosIF = value,
      error: err => { alert('Error al cargar los documentos: ' + err) }
    });
    this.service.getDocumentoOL().subscribe({
      next: value => this.documentosOL = value,
      error: err => { alert('Error al cargar los documentos: ' + err) }
    });
    this.service.getDocumentoDI().subscribe({
      next: value => this.documentosDI = value,
      error: err => { alert('Error al cargar los documentos: ' + err) }
    });
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  checked = false;
}
