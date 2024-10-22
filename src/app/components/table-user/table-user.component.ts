import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

//PrimeNG
import { TableModule } from 'primeng/table';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-table-user',
  standalone: true,
  imports: [TableModule, ButtonModule, ConfirmPopupModule],
  providers: [ConfirmationService],
  templateUrl: './table-user.component.html',
  styleUrl: './table-user.component.css'
})
export class TableUserComponent {

  @Output() handleRedirectEvent = new EventEmitter<string>()

  constructor(private confirmPopUpService: ConfirmationService) {

  }
  handleConfirmDelete(event: Event) {
    this.confirmPopUpService.confirm({
      target: event.target as EventTarget,
      message: '¿Estás seguro de que deseas eliminar este usuario?',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Si, eliminar',
      rejectLabel: 'Cancelar',
      accept: () => {
            },
            reject: () => {
            }
    })
  }

  handleRedirectEdit(id: string) {
    this.handleRedirectEvent.emit(id)
  }
}
