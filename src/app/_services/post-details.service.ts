import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class PostDetailsService {
  url='http://localhost:61195/api/Employees';
  

  constructor(public http:HttpClient) { }
  PostDetailsApi(users:User)
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<User>(this.url,users,httpOptions)
                    .subscribe(data=>console.log("Sucess",data));
  }
}
