import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment.local';
import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string
  constructor(private _httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl
  }

  createUser(body: IUser): Observable<any> {
    return this._httpClient.post(this.apiUrl + '/users', body)
  }

  editUser(body: IUser): Observable<any> {
    return this._httpClient.put(this.apiUrl + '/users/' + body.id, body)
  }

  getUsers(): Observable<Array<IUser>> {
    return this._httpClient.get<Array<IUser>>(this.apiUrl + '/users')
  }

  getUserById(id: string): Observable<IUser> {
    return this._httpClient.get<IUser>(this.apiUrl + '/users/' + id)
  }

  deleteUserById(id: string): Observable<any> {
    return this._httpClient.delete(this.apiUrl + '/users/' + id)
  }
}
