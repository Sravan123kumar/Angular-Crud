import { Component, OnInit } from '@angular/core';
import { IUser } from '../iuser';
import { User } from '../_models/user';
import { GetDetailsServiceService } from '../_services/get-details-service.service';

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})
export class GetDetailsComponent implements OnInit {
Employee:IUser[];
firstname:any;
p=1;
  constructor(private _service:GetDetailsServiceService) { }

  ngOnInit(): void {
    this.getEmpDetails();
  }
  getEmpDetails()
  {
    return this._service.GetDetails()
              .subscribe(data=>this.Employee=data);
  }
  Search()
  {
    if(this.firstname == "")
    {
      this.ngOnInit();
    }
    else
    {
      this.Employee=this.Employee.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
      });
    }
  }
  key='id';
  reverse=false;
  sort(key)
  {
    this.key=key;
    this.reverse= !this.reverse;
  }

}
