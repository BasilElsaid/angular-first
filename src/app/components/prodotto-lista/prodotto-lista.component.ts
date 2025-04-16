import { Component } from '@angular/core';
import { Prodotto } from '../../models/prodotto';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-prodotto-lista',
  imports: [CommonModule],
  templateUrl: './prodotto-lista.component.html',
  styleUrl: './prodotto-lista.component.css'
})
export class ProdottoListaComponent {

  elenco: Prodotto[] = new Array();

  constructor(
    private firebase: FirebaseService
  ){}

  ngOnInit(): void {
    this.aggiorna()
    
  }
  

  aggiorna(): void {
    this.firebase.getProdotti().subscribe((data: any) => {
      this.elenco = Object.keys(data).map((key) => { 
        data[key]['id'] = key
        return data[key] 
      })
    })
  }

  elimina(varCodice: string | undefined): void{
    let idFirebase: string = ''
    this.elenco.forEach(element => {
      if (element.codice == varCodice){
        idFirebase = element.id;
        this.firebase.deleteProdotto(idFirebase).subscribe();
        alert("Operazione effettuata con successo");
        this.aggiorna();
        return;
      }
    })
  }

}
