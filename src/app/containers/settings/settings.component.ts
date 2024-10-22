import { Component, OnInit } from '@angular/core';

// Components
import { TableUserComponent } from '../../components/table-user/table-user.component';
import { HeaderTableComponent } from '../../components/header-table/header-table.component';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/user.interface';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [TableUserComponent, HeaderTableComponent, ToastModule],
  providers: [MessageService],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit {

  listUsers: Array<IUser> = []
 constructor(private router: Router, private _userService: UserService, private messageService: MessageService) {

 }

 ngOnInit(): void {
   this.getListUser()
 }

 handleRedirectUser(event?: string) {  
  this.router.navigate([event ? `managment/edit/${event}` : 'managment/create'])
 }

 handleDeleteUserEvent(id: string) {
  this._userService.deleteUserById(id).subscribe({
    next: response => {
      this.messageService.add({severity: 'success', summary: 'success', detail: 'El usuario se eliminó correctamente'})
      this.getListUser()
    }
  })
 }

 getListUser() {
  this._userService.getUsers().subscribe({
    next: response => {
      this.listUsers = response
    },
    error: error => {

    }
  })
 }
}
