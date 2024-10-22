import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IUser } from '../../interfaces/user.interface';
import { EPermission } from '../../interfaces/permission.interface';
import { ERole } from '../../interfaces/rol.interface';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [InputTextModule, ButtonModule, ReactiveFormsModule, DropdownModule, MultiSelectModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {

  @Output() handleSendUserData = new EventEmitter<IUser>()

  userForm: FormGroup
  listPermission: Array<EPermission> = [EPermission.CANCEL, EPermission.DELETE, EPermission.CREATE, EPermission.EDIT] as Array<EPermission>
  listRol: Array<ERole> = [ERole.ADMIN, ERole.USER]

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: [null, [Validators.minLength(3), Validators.required]],
      password: [null, [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$")]],
      rol: [null, Validators.required],
      permission: [[], Validators.required]
    })
  }

  hasError(key: string, path: string): boolean {
    const userKey = this.userForm.get(key)!

    return userKey?.hasError(path) && userKey.dirty
  }

  changeRol(event: DropdownChangeEvent) {
     this.userForm.get('permission')?.setValue(event.value === ERole.ADMIN ? this.listPermission : [])
  }

  sendUserData() {
    if (this.userForm.invalid) return
    console.log(this.userForm.value);

    this.handleSendUserData.emit(this.userForm.value)
  }

}
