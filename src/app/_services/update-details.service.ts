import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UpdateDetailsService {
  url="http://localhost:61195/api/employees/";
  url1="";
  constructor(public http:HttpClient) { }
  Update(users:User,id:number)
  {
    this.url1=this.url+id+',';
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    
    this.http.put<User>(this.url,users,httpOptions )
              .subscribe(data=>console.log("sucess",data))
  }
}
