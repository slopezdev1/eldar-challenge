import { AfterContentChecked, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ButtonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements AfterContentChecked {

  userRole: string = ''
  constructor(private _authService: AuthService) {
    this.setUserRole()
  }

  ngAfterContentChecked(): void {
    this.setUserRole()
  }

  setUserRole() {
     this.userRole = this._authService.getUserSessionStorage()?.role
  }

  logOut() {
    this._authService.clearSession()
  }

}
