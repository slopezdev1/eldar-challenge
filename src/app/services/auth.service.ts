import { Injectable } from '@angular/core';
import { environment } from '../environment/environment.local';
import { IUser } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL: string
  constructor(private _http: HttpClient, private router: Router) {
    this.apiURL = environment.apiUrl
  }

  login(body: IUser): Observable<IUser> {
    return this._http.get<IUser[]>(`${this.apiURL}/users?name=${body.name}&password=${body.password}`).pipe(
      map( users => {
        if(users.length > 0) {
          this.setUserSessionStorage(users[0])
          return users[0]
        }
        throw new Error('Usuario no encontrado o contraseña incorrecta');
      }),
      catchError( error => {
        throw new Error('Usuario no encontrado o contraseña incorrecta');
      })
    )
  }

  isLoggedIn(): boolean {
    return Boolean(this.getUserSessionStorage !== null)
  }

  getUserSessionStorage(): IUser {
    return JSON.parse(sessionStorage.getItem('user')!)
  }

  setUserSessionStorage(user: IUser) {
    sessionStorage.setItem('user', JSON.stringify(user))
  }

  clearSession() {
    sessionStorage.removeItem('user')
    this.router.navigate(['/auth'])
  }
}
