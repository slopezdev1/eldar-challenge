import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormUserComponent } from '../form-user/form-user.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormUserComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  id: string

  constructor(private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
  }

}
