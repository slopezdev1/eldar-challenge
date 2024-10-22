import { Component } from '@angular/core';

//PrimeNG
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ERole } from '../../interfaces/rol.interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, ButtonModule, InputTextModule, ReactiveFormsModule, ToastModule],
  providers: [AuthService, MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formLogin: FormGroup

  constructor(private formBuilder: FormBuilder, private _authService: AuthService, private router: Router, private toastService: MessageService) {
    this.formLogin = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hasError(key: string, path: string): boolean {
    const userKey = this.formLogin.get(key)!
    return userKey?.hasError(path) && userKey.dirty
  }

  handleLogin() {
    if(this.formLogin.invalid) return
    this._authService.login(this.formLogin.value).subscribe({
      next: user => {
        this.toastService.add({severity: 'success', summary: 'success', detail: 'Inicio de sesión exitoso'})
        this.router.navigate([user.role === ERole.ADMIN ? 'managment' : 'home'])
      },
      error: (error: Error) => {
        this.toastService.add({severity: 'error', summary: 'error', detail: error.message})
      }
    })
    
  }

}
