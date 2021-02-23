import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteDetailsService {
 url='http://localhost:61195/api/Employees/';
  constructor(private http:HttpClient) { }
  Delete(id:number)
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    this.http.delete(this.url+id,httpOptions)
              .subscribe(data=>console.log("delted",data));
  }
}
