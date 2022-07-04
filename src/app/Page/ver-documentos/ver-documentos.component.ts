import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { DocumentosService } from 'src/app/servicios/documentos.service';
import { Documento } from 'src/app/modelos/documentos';
import { Observable, subscribeOn, Subscriber } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ver-documentos',
  templateUrl: './ver-documentos.component.html',
  styleUrls: ['./ver-documentos.component.css']
})
export class VerDocumentosComponent implements OnInit {
  public documentosIF:Documento[] =[];
  public documentosOL:Documento[] =[];
  public documentosDI:Documento[] =[];
  public base64Image: any;
  panelOpenState = false;


  constructor(private _formBuilder: FormBuilder,private service:DocumentosService,private alerta: MatSnackBar) { }

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
  
  convertToBase64(file: File) {
    console.log(file);
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    })

    observable.subscribe((d) => {
      this.base64Image = d;
    })
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file)

    fileReader.onload = () => {
      subscriber.next(fileReader.result)
      subscriber.complete()
    }
    fileReader.onerror = () => {
      subscriber.error()
    }
  }
  
  onFileSelected(event: any): void {
     this.convertToBase64(event.target.files[0]);
   }

   pdf(x: string){
    let aux = x.substring(28)
    //console.log(x);
    console.log(aux);
    const source = `data:application/pdf;base64,${aux}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `Documento.pdf`
    link.click();
   return aux;
   }

}
