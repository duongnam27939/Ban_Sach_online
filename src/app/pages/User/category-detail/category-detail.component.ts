import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/interface/category';
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

   allCategory!: any[];
   page: number = 1;
   tabSize: number = 8;
   tabSizes: number[] = [4, 6, 8, 10, 100]
   count: number = 0

  constructor(
    private router: ActivatedRoute,
    private categoryService: CategoryService,
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
      this.allCategory = data      
    });
  }

  onHandleSubmit() {
    this.categoryService.getAllCategory().subscribe((response: any) => {
      console.log(response.data)
      this.category = response.data
      this.allCategory = response.data
    }
    )
  }
  onHandleLimit(event: any) {
    this.tabSize = event.target.value;
    console.log(event.target.value)
    this.page = 1
    this.onHandleSubmit()
    console.log(this.onHandleSubmit());

  }

  onHandlesPage(event: any) {
    this.page = event;
    this.onHandleSubmit()

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
