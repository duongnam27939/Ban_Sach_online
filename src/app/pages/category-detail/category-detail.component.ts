import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent {
   category!:any;
   products!:any;

  constructor(
    private router: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductsService
  ) {
    const id = this.router.snapshot.paramMap.get('id')!;
    // console.log(id);
    
    this.categoryService.getproductByCategory(id).subscribe((response:any) => {
      this.products = response;
      // console.log(response.products);

    });
    this.categoryService.getAllCategory().subscribe((data:any) => {
      this.category = data.data;
      console.log(data.data);
      
      
    });
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
