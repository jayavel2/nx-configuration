import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  constructor() {
    console.log('--------------constructor----')
  }

  ngOnInit(): void {
    console.log('-------------ngoninit------')
  }
}
