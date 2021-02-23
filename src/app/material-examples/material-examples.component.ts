import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { XyzComponent } from '../xyz/xyz.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-material-examples',
  templateUrl: './material-examples.component.html',
  styleUrls: ['./material-examples.component.css']
})
export class MaterialExamplesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;
 Size=110;
 showspinner=false;
 open=false;
 selectedvalue:string;
 optgroupselected:string;
 options=["Angular","C#","SQL"];
  constructor(private snackbar:MatSnackBar,private Dialog:MatDialog) { }

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
  opensnackbar(message,action)
  {
    let snackref=this.snackbar.open(message,action,{duration:2000});
    snackref.afterDismissed().subscribe(()=>{
      console.log('the snack bar dismmesed')
    });
    snackref.onAction().subscribe(()=>
    {
      console.log('the snack bar action was trigged');
    });
  }
  openDialog()
  {
    let ref=this.Dialog.open(XyzComponent,{data:{name:'Sravan'}});
    ref.afterClosed().subscribe(result=>
      {
        
        if(result=="true")
        {
          console.log("Admin")
        }
        else
        {
          console.log("SuperAdmin");
        }
      });
  }
}
