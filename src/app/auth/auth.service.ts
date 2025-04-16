import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API_KEY = 'AIzaSyCcCcU8eYGqS4g-bVjPkz142PkXU_r6_jo';
  private signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`
  private signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`

  private isLoggedIn = false
  private _user: User | null | undefined

  constructor(private http: HttpClient) { }

  isAuthenticated(){
    return this.isLoggedIn
  }

  createUser(email: string, id: string, token: string, expirationDate: Date){
    this._user = new User(email, id, token, expirationDate)
  }

  get user(){
    return this._user
  }

  signUp(email: string, password: string){
    return this.http.post(this.signUpUrl, {email: email, password: password, returnSecureToken: true})
  }

  signIn(email: string, password: string){
    this.isLoggedIn = true
    return this.http.post(this.signInUrl, {email: email, password: password, returnSecureToken: true})
  }

  signOut(){
    this.isLoggedIn = false
    this._user = null
    localStorage.removeItem('user')
  }
}
