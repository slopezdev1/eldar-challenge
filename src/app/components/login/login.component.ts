import { Component } from '@angular/core';

//PrimeNG
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ERole } from '../../interfaces/rol.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formLogin: FormGroup

  constructor(private formBuilder: FormBuilder, private _authService: AuthService, private router: Router) {
    this.formLogin = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  handleLogin() {
    this._authService.login(this.formLogin.value).subscribe({
      next: user => {
        this.router.navigate([user.role === ERole.ADMIN ? 'managment' : 'home'])
      }
    })
    
  }

}
