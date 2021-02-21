import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';


@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  Usermodel=new User(2,"Samantha","Samantha@gmail.com",100,"Kurnool","O+ve","Hr",true);
  constructor() { }

  ngOnInit(): void {
  }

}
