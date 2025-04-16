import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-prodotto-inserimento',
  imports: [FormsModule],
  templateUrl: './prodotto-inserimento.component.html',
  styleUrl: './prodotto-inserimento.component.css'
})
export class ProdottoInserimentoComponent {

  codi: string | undefined;
  nome: string | undefined;
  desc: string | undefined;
  prez: number | undefined;
  quan: number | undefined;

  constructor(
    private router: Router, 
    private firebase: FirebaseService
  ){}

  salva() : void {
    this.firebase.insertProdotto( 
      {codice: this.codi, nome: this.nome, descrizione: this.desc, prezzo: this.prez, quantita: this.quan}
    ).subscribe(data => {
      console.log(data)
    })
    alert("Operazione effettuata con successo")
    this.router.navigateByUrl("prodotto/lista")
  }
  
}
