import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from 'src/app/interface/products';
import { CategoryService } from 'src/app/service/category.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-pages-detail',
  templateUrl: './pages-detail.component.html',
  styleUrls: ['./pages-detail.component.scss']
})
export class PagesDetailComponent {
  products!: IProducts;
  category!: string;
  similarProducts: IProducts[] = [];



  constructor(
    private router: ActivatedRoute,
    private productsService: ProductsService,
    private categoryService: CategoryService
  ) {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.productsService.getProduct(id).subscribe((data: any) => {
        this.products = data.products;
        console.log(this.products);
        console.log(this.products.categoryId._id);

        if (this.products.categoryId._id) {
          this.categoryService.getCategory(this.products.categoryId._id).subscribe((response: any) => {
            this.similarProducts = response.products;
            console.log(response.products);
          })
        }
      });
    }

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