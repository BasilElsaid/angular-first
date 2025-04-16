import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prodotto } from '../../models/prodotto';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-prodotto-modifica',
  imports: [FormsModule],
  templateUrl: './prodotto-modifica.component.html',
  styleUrl: './prodotto-modifica.component.css'
})
export class ProdottoModificaComponent {

  elenco: Prodotto[] = new Array();

  codi: string | undefined;
  nome: string | undefined;
  desc: string | undefined;
  prez: number | undefined;
  quan: number | undefined;

  constructor(
    private activeRoute: ActivatedRoute, 
    private router: Router,
    private firebase: FirebaseService
  ) {}

  ngOnInit(): void{
    this.activeRoute.params.subscribe(risultato => {
      this.firebase.getProdotti().subscribe((data: any) => {
        this.elenco = Object.keys(data).map((key) => { 
            data[key]['id'] = key
            return data[key]
          })
        this.elenco.forEach(element => {
          if(element.codice == risultato['codice']){
            this.codi = element.codice;
            this.nome = element.nome;
            this.desc = element.descrizione;
            this.prez = element.prezzo;
            this.quan = element.quantita;
          }
        });
      })
    })
  }

  modifica(): void {
    let idFirebase: string = ''
    this.elenco.forEach(element => {
      if (element.codice == this.codi){
        idFirebase = element.id;
        this.firebase.updateProdotto(idFirebase,
          {codice: this.codi, nome: this.nome, descrizione: this.desc, prezzo: this.prez, quantita: this.quan}
        ).subscribe();
        alert("Operazione effettuata con successo");
        this.router.navigateByUrl("prodotto/lista");
        return
      }
    });
  }
  

}