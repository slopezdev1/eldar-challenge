import { Component, OnInit } from '@angular/core';

// Components
import { TableUserComponent } from '../../components/table-user/table-user.component';
import { HeaderTableComponent } from '../../components/header-table/header-table.component';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [TableUserComponent, HeaderTableComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit {

  listUsers: Array<IUser> = []
 constructor(private router: Router, private _userService: UserService) {

 }

 ngOnInit(): void {
   this.getListUser()
 }

 handleRedirectUser(event?: string) {  
  this.router.navigate([event ? `managment/edit/${event}` : 'managment/create'])
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
