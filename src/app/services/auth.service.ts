import { Injectable } from '@angular/core';
import { environment } from '../environment/environment.local';
import { IUser } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL: string
  currentUser: IUser = {} as IUser
  constructor(private _http: HttpClient) {
    this.apiURL = environment.apiUrl
  }

  login(body: IUser): Observable<IUser> {
    return this._http.get<IUser[]>(`${this.apiURL}/users?name=${body.name}&password=${body.password}`).pipe(
      map( users => {
        if(users.length > 0) {
          this.currentUser = users[0]
          return users[0]
        }
        throw new Error('Usuario no encontrado o contraseña incorrecta');
      }),
      catchError( error => {
        throw new Error('Usuario no encontrado o contraseña incorrecta');
      })
    )
  }
}
