import { Component, OnInit } from '@angular/core';
import { IUser } from '../iuser';
import { User } from '../_models/user';
import { DeleteDetailsService } from '../_services/delete-details.service';
import { GetDetailsServiceService } from '../_services/get-details-service.service';
import { PostDetailsService } from '../_services/post-details.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  Usermodel=new User(2,"Samantha","Samantha@gmail.com",100,"Kurnool","O+ve","Hr",true);
  Employees:IUser[];
  hasShow=false;
  constructor(public _service:PostDetailsService,public GetService:GetDetailsServiceService,public DeleteService:DeleteDetailsService) { }
  Bloodgroup=["o+ve","o-ve","A+ve","A-ve","B+ve","B-Ve","AB+ve","AB-Ve"];
  ngOnInit(): void {
  }
  PostEmpDetails()
  {
   console.log("Get in ts ")
    
    return this._service.PostDetailsApi(this.Usermodel);
  }
  Show()
  {
    console.log("Showing details");
    this.hasShow=true;
    return this.GetService.GetDetails()
                .subscribe(data=>this.Employees=data);
  }
  Delete(no)
  {
    return this.DeleteService.Delete(no);
                
  }

}
