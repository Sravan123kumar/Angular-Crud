import { Component, OnInit } from '@angular/core';
import { IUser } from '../iuser';
import { GetDetailsServiceService } from '../_services/get-details-service.service';
import { User } from '../_models/user';
import { UpdateDetailsService } from '../_services/update-details.service';

@Component({
  selector: 'app-update-details1',
  templateUrl: './update-details1.component.html',
  styleUrls: ['./update-details1.component.css']
})
export class UpdateDetails1Component implements OnInit {
  Employee:IUser[];
 
  no:number;
  constructor(private _service:GetDetailsServiceService,private UpdateService:UpdateDetailsService) { }
  hasform:boolean=false;
  Usermodel=new User(2,"Samantha","Samantha@gmail.com","100","Kurnool","O+ve","Hr",true);
  Bloodgroup=["o+ve","o-ve","A+ve","A-ve","B+ve","B-Ve","AB+ve","AB-Ve"];
  ngOnInit(): void {
    this.getEmpDetails();
  }
  getEmpDetails()
  {
    return this._service.GetDetails()
              .subscribe(data=>this.Employee=data);
  }
  Update(id)
  {
    this.no=id
    console.log(id);
    
    this.hasform=true;
  }
  UpdateForm()
  {
    this.UpdateService.Update(this.Usermodel,this.no);
  }
}
