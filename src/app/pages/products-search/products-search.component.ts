import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from 'src/app/interface/products';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss']
})
export class ProductsSearchComponent {
  searchValue: string = '';
  products: IProducts[] = [];
  
  noResultsFound: boolean = false;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchValue = params['value'];
      this.searchProducts();
    });
  }

  searchProducts() {
    this.productService.getAllProducts().subscribe((response: any) => {
      this.products = response.products.filter((product: any) => {
        const productNameMatch = product.name.toLowerCase().includes(this.searchValue.toLowerCase());
        const authorNameMatch = product.author.toLowerCase().includes(this.searchValue.toLowerCase());
        return productNameMatch || authorNameMatch;
      });
  
      this.noResultsFound = this.products.length === 0;
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
