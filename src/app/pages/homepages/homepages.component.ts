import { Component } from '@angular/core';
import { ICategory } from 'src/app/interface/category';
import { IProducts } from 'src/app/interface/products';
import { CategoryService } from 'src/app/service/category.service';
import { ProductsService } from 'src/app/service/products.service';


@Component({
  selector: 'app-homepages',
  templateUrl: './homepages.component.html',
  styleUrls: ['./homepages.component.scss']
})
export class HomepagesComponent {

  products!: IProducts[]
  category?: ICategory[]
  constructor(private productsSevri: ProductsService,
    private cate: CategoryService) {
    this.productsSevri.getAllProducts().subscribe((response: any) => {
      this.products = response.products.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      // console.log(response.products);
    })
    this.cate.getAllCategory().subscribe((response: any) => {
      this.category = response.data
      // console.log(response);


    })
  }
  formatCurrency(value: number): string {
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0
    });

    return formatter.format(value);
  }
}
