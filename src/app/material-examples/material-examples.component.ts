import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-examples',
  templateUrl: './material-examples.component.html',
  styleUrls: ['./material-examples.component.css']
})
export class MaterialExamplesComponent implements OnInit {
 Size=110;
 showspinner=false;
 open=false;
 selectedvalue:string;
 optgroupselected:string;
 options=["Angular","C#","SQL"];
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
  Log(tab)
  {
    console.log(tab);
  }
}
