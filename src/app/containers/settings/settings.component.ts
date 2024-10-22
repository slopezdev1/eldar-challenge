import { Component } from '@angular/core';

// Components
import { TableUserComponent } from '../../components/table-user/table-user.component';
import { HeaderTableComponent } from '../../components/header-table/header-table.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [TableUserComponent, HeaderTableComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
 constructor(private router: Router) {

 }

 handleRedirectUser(event?: string) {
  this.router.navigate([event ? `managment/edit/${event}` : 'managment/create'])
 } 
}
