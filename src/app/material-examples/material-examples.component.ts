import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-examples',
  templateUrl: './material-examples.component.html',
  styleUrls: ['./material-examples.component.css']
})
export class MaterialExamplesComponent implements OnInit {
 Size=110;
 showspinner=false;
  constructor() { }

  ngOnInit(): void {
  }
  LoadData()
  {
    this.showspinner=true;
    setTimeout(() => {
      this.showspinner=false;
    }, 3000);
  }

}
