import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from 'src/app/interface/products';
import { AuthService } from 'src/app/service/auth.service';
import { ProductsService } from 'src/app/service/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-layout-user',
  templateUrl: './layout-user.component.html',
  styleUrls: ['./layout-user.component.scss']
})
export class LayoutUserComponent {
  searchValue: any;
  isShown: boolean = true
  products!: IProducts[]
  maxDisplayedProducts: number = 5;
  showResults: boolean = false;

  constructor(private router: Router,
    private productService: ProductsService,
    private route: ActivatedRoute,
  ) { }
  userName = localStorage.getItem('userName');
  role = localStorage.getItem('role');
  showAdmin = true;
  

  onSearch() {
    console.log(`product:`, this.searchValue);
    if (this.searchValue) {
      this.isShown = true;
      this.productService.getAllProducts().subscribe((response: any) => {
        const searchResults = response.products.filter((product: any) => {
          const productNameMatch = product.name.toLowerCase().includes(this.searchValue.toLowerCase());
          const authorNameMatch = product.author.toLowerCase().includes(this.searchValue.toLowerCase());
          return productNameMatch || authorNameMatch;
        });
        this.products = searchResults.slice(0, this.maxDisplayedProducts);
        this.showResults = true;
      });
    } else {
      this.showResults = false;
    }
  }


  ngOnInit() {
    this.onSearch();
  }

  onClickOutside() {
    this.isShown = false;
  }

  onClick(item: IProducts) {
    this.isShown = !this.isShown;
    this.router.navigate(['/pages-detail', item._id]).then(() => {
      window.location.reload();
    });
  }

}
