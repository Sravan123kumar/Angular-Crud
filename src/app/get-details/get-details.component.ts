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
  constructor(private _service:GetDetailsServiceService) { }

  ngOnInit(): void {
    this.getEmpDetails();
  }
  getEmpDetails()
  {
    return this._service.GetDetails()
              .subscribe(data=>this.Employee=data);
  }

}
