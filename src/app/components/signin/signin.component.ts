import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  email: string | undefined;
  password: string | undefined;

  constructor(
    private router: Router, 
    private authService: AuthService
  ){}


  //TODO SISTEMA IL DATABASE PER UTENTI
  login() : void {
    if(this.email != '' && this.password != ''){
      this.authService.signIn(this.email!, this.password!).subscribe((data: any) => {
        console.log(data)
        
        const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)
        this.authService.createUser(data.email, data.localId, data.idToken ,expirationDate)
        localStorage.setItem('user', JSON.stringify(this.authService.user))

        console.log(this.authService.user)
      })
      alert("Operazione effettuata con successo")
      this.router.navigateByUrl("user/dashboard")
    }
    else{
      alert("Email/Password are required")
    }
  }
}
