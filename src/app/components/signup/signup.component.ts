import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  email: string | undefined;
  password: string | undefined;

  constructor(
    private router: Router, 
    private authService: AuthService
  ){}


  //TODO SISTEMA IL DATABASE PER UTENTI
  registra() : void {
    if(this.email != '' && this.password != ''){
      this.authService.signUp(this.email!, this.password!).subscribe(data => {
        console.log(data)
      })
      alert("Operazione effettuata con successo")
      this.router.navigateByUrl("home")
    }
    else{
      alert("Email/Password are required")
    }
  }

}
