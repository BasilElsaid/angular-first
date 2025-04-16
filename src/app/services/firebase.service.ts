import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private urlFirebaseProdotti: string = "https://corso-angular-83eef-default-rtdb.europe-west1.firebasedatabase.app/prodotti"

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  insertProdotto(body: {}) {
    return this.http.post(`${this.urlFirebaseProdotti}.json`, body)
  }

  getProdotti() {
    return this.http.get(`${this.urlFirebaseProdotti}.json?auth=${this.authService.user?.token}`)
  }

  deleteProdotto(id: string) {
    return this.http.delete(`${this.urlFirebaseProdotti}/${id}.json`)
  }

  updateProdotto(id: string, body: {}) {
    return this.http.patch(`${this.urlFirebaseProdotti}/${id}.json`, body)
  }

}
