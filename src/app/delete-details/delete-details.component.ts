import { Component, OnInit } from '@angular/core';
import { DeleteDetailsService } from '../_services/delete-details.service';

@Component({
  selector: 'app-delete-details',
  templateUrl: './delete-details.component.html',
  styleUrls: ['./delete-details.component.css']
})
export class DeleteDetailsComponent implements OnInit {
  
  constructor(private _service:DeleteDetailsService) { }

  ngOnInit(): void {
  }
  Del(id)
  {
    this._service.Delete(id);
              
  }

}
