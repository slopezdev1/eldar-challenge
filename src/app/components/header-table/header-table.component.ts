import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() length: number = 0

  handleRedirectCreate() {
    this.handleRedirectEvent.emit()
  }
}
