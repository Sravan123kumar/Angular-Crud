import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-example',
  templateUrl: './pagination-example.component.html',
  styleUrls: ['./pagination-example.component.css']
})
export class PaginationExampleComponent implements OnInit {
  items = [];
  pageOfItems: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

}
