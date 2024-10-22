import { Component } from '@angular/core';

// Components
import { TableUserComponent } from '../../components/table-user/table-user.component';
import { HeaderTableComponent } from '../../components/header-table/header-table.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [TableUserComponent, HeaderTableComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

}
