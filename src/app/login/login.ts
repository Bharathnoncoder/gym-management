import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  imports:  [
   FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
    encapsulation: ViewEncapsulation.None // PrimeNG styles require global CSS import
})
export class Login {

  username: string = '';
  password: string = '';

  login() {
    if (this.username && this.password) {
      console.log('Logging in:', this.username, this.password);
      // TODO: call authentication API here
    } else {  
      console.warn('Please fill in both fields');
    }
  }
}
