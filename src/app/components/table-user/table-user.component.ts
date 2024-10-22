import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

//PrimeNG
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-table-user',
  standalone: true,
  imports: [TableModule, ButtonModule],
  templateUrl: './table-user.component.html',
  styleUrl: './table-user.component.css'
})
export class TableUserComponent {

}
