import { Component } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { ProductsService } from 'src/app/service/products.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
products!: any;
category!:any;
user!: any
categoryCount!: number;
productsCount!: number;
userCount!: number;


constructor(private productSevice: ProductsService,
  private categorySevice: CategoryService,
  private useSevice: UserService){
    this.categorySevice.getAllCategory().subscribe((response:any) =>{
      this.category = response.data;
      
      this.categoryCount = this.category.length;

    });
    this.productSevice.getAllProducts().subscribe((response:any) =>{
      this.products = response.products;
      this.productsCount = this.products.length;
    });
    this.useSevice.geAlltUser().subscribe((response:any) =>{
      this.user = response.data;
      this.userCount = this.user.length;
      
    })
  }
}
