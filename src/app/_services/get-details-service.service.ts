import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../iuser';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class GetDetailsServiceService {

  url:string="http://localhost:51431/api/apis";
  
  constructor(public http:HttpClient) { }
  GetDetails():Observable<IUser[]>
  {
    return this.http.get<IUser[]>(this.url);
  }
}
