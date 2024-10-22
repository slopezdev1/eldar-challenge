import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header-table',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './header-table.component.html',
  styleUrl: './header-table.component.css'
})
export class HeaderTableComponent {

  @Output() handleRedirectEvent = new EventEmitter<string>()

  handleRedirectCreate() {
    this.handleRedirectEvent.emit()
  }
}
