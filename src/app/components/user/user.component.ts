import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUserComponent } from '../form-user/form-user.component';
import { IUser } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormUserComponent, ToastModule, ProgressSpinnerModule],
  providers: [MessageService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  id: string
  isLoading: boolean = false

  constructor(private activatedRoute: ActivatedRoute, private _userService: UserService, private messageService: MessageService, private router: Router) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
  }

  getUserData(user: IUser) {
    this.isLoading = true
    this.id !== null ? this.handleEditUser(user) : this.handleCreateUser(user)
  }

  handleCreateUser(user: IUser) {
    this._userService.createUser(user).subscribe({
      next: response => {
        this.messageService.add({severity: 'success', summary: 'summary', detail: 'El usuario se creó con éxito', life: 3000})
        setTimeout(() => {
          this.router.navigate(['managment'])
          this.isLoading = false
        }, 3000);
      },
      error: error => {
        this.messageService.add({severity: 'error', summary: 'error', detail: 'Ocurrió un error al crear el usuario'})
      }
    })
  }

  handleEditUser(user: IUser) {
    this._userService.editUser(user).subscribe({
      next: response => {
        this.messageService.add({severity: 'success', summary: 'summary', detail: 'El usuario se editó con éxito', life: 3000})
        setTimeout(() => {
          this.router.navigate(['managment'])
          this.isLoading = false
        }, 3000);
      },
      error: error => {
        this.messageService.add({severity: 'error', summary: 'error', detail: 'Ocurrió un error al editar el usuario'})
      }
    })
  }

}
