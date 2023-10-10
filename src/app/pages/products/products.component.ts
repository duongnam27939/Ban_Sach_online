import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from 'src/app/interface/products';
import { ProductsService } from 'src/app/service/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products!: IProducts[];
  category!: any[];
  isShown: boolean = true;
  searchValue: any;
  

  constructor(private productsService: ProductsService,
    private route: ActivatedRoute) {
    this.productsService.getAllProducts().subscribe((response: any) => {
      this.products = response.products
      console.log(response.products);
    })
  }

  removeId(_id: any) {
    this.productsService.deleteProduct(_id).subscribe((data) => {
      
      Swal.fire({
        title: 'Xác nhận xóa',
        text: 'Bạn có chắc chắn muốn xóa sản phẩm?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Hủy',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Xóa sản phẩm thành công',
            text: 'Sản phẩm đã được xóa thành công!',
            showConfirmButton: false,
            timer: 2000,
            iconHtml: '<i class="fas fa-check-circle"></i>'
          });
          this.products = this.products.filter(item => item._id !== _id)
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Hủy bỏ',
            'Sản phẩm không bị xóa.',
            'info'
          );
        }
      });
    })
  }


  onSearch() {
    console.log(`product:`, this.searchValue);
    this.isShown = true;
    if (this.searchValue === "") {
      this.productsService.getAllProducts().subscribe((response: any) => {
        this.products = response.products;
        console.log(response.products);
      });
    } else {
      this.productsService.getAllProducts().subscribe((response: any) => {
        this.products = response.products.filter((product: any) => {
          const productNameMatch = product.name.toLowerCase().includes(this.searchValue.toLowerCase());
          const authorNameMatch = product.author.toLowerCase().includes(this.searchValue.toLowerCase());
          return productNameMatch || authorNameMatch;
        });
      });
    }
  }
}
