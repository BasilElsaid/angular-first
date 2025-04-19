import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-ls';

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.authService.autoLogin();
  }

  logOut(){
    this.authService.signOut()
  }

  get isAuthenticated(){
    return this.authService.isAuthenticated();
  }
}
