import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }
  public loginUserFromRemote(user: User):Observable<User>{

   return this.http.post<User>("http://localhost:8090/login",user)

  }
  public registerUserFromRemote(user: User):Observable<User>{
    return this.http.post<User>("http://localhost:8090/signup",user)
  }
}
