import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [InputTextModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {

  @Output() handleSendUserData = new EventEmitter<IUser>()

  userForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: [null, [Validators.minLength(3), Validators.required]],
      password: [null, [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$")]]
    })
  }

  hasError(key: string, path: string): boolean {
    const userKey = this.userForm.get(key)!

    return userKey?.hasError(path) && userKey.dirty
  }

  sendUserData() {
    if(this.userForm.invalid) return

    this.handleSendUserData.emit(this.userForm.value)
  }

}
