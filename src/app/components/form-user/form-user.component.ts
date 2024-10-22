import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IUser } from '../../interfaces/user.interface';
import { EPermission } from '../../interfaces/permission.interface';
import { ERole } from '../../interfaces/rol.interface';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { StrongPasswordRegx } from '../../utils/regex';
import { v4 as uuidv4 } from 'uuid';

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
      id: [''],
      name: [null, [Validators.minLength(3), Validators.required]],
      password: [null, [Validators.required, Validators.pattern(StrongPasswordRegx)]],
      rol: [null, Validators.required],
      permission: [null, Validators.required]
    })
  }

  hasError(key: string, path: string): boolean {
    const userKey = this.userForm.get(key)!

    return userKey?.hasError(path) && userKey.dirty
  }

  changeRol(event: DropdownChangeEvent) {
     this.userForm.get('permission')?.setValue(event.value === ERole.ADMIN ? this.listPermission : [])
  }

  generateID(user: IUser): IUser {
    return {
      ...user,
      id: uuidv4()
    }
  }

  sendUserData() {    
    if (this.userForm.invalid) return
    this.handleSendUserData.emit(this.userForm.value.id ? this.userForm.value : this.generateID(this.userForm.value))
  }


}
