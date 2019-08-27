import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.scss']
})


  export class ProductaddComponent implements OnInit {
    arr: Product[] = [];
    constructor(private _data: ProductdataService) {}

    ngOnInit() {}
    onSaveProduct(f) {
      this._data.addProduct(f.value).subscribe((data: any) => {
        console.log(data);
      });
    }
  }
