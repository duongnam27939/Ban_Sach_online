import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IProducts } from 'src/app/interface/products';
import { CartService } from 'src/app/service/cart.service';
import { CategoryService } from 'src/app/service/category.service';
import { FeedbackService } from 'src/app/service/feedback.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-pages-detail',
  templateUrl: './pages-detail.component.html',
  styleUrls: ['./pages-detail.component.scss']
})
export class PagesDetailComponent {
  products: any;
  category!: string;
  similarProducts: IProducts[] = [];
  user: any = null
  content!: string

  allProducts!: IProducts[];
  page: number = 1;
  tabSize: number = 8;
  tabSizes: number[] = [4, 6, 8, 10, 100]
  count: number = 1

  constructor(
    private router: ActivatedRoute,
    private productService: ProductsService,
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private feedbackService: FeedbackService,
    private cartService: CartService
  ) {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProduct(id).subscribe((data: any) => {
        this.products = data.products;
        console.log(this.products);
        // console.log(this.products.categoryId._id);

        if (this.products.categoryId._id) {
          this.categoryService.getCategory(this.products.categoryId._id).subscribe((response: any) => {
            this.similarProducts = response.products;
            console.log(response.products);
            this.allProducts = response.data
          })
        }
      });
    }

  }


  onHandleSubmit() {
    this.categoryService.getCategory(this.products.categoryId._id).subscribe((response: any) => {
      console.log(response.data)
      this.similarProducts = response.products;
      this.allProducts = response.data
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

  // commets
  formValueFeedback = this.formBuilder.group({
    content: [""],
  })


  handleSearch() {
    this.user = JSON.parse(localStorage.getItem("user") as string)?.auth
    if (!this.user) {
      this.toastr.info("Bạn cần đăng nhập để thực hiện hàng động này", "Nhắc nhở")
      return
    }
    if (this.formValueFeedback.value.content == "") {
      this.toastr.info("Bạn cần nhập nội dung phản hồi", "Cảnh báo")
      return
    }
    const newValue = {
      content: this.formValueFeedback.value.content,
      productId: this.products._id,
      userId: this.user._id
    }

    
    this.feedbackService.create(newValue).subscribe((resp) => {
      this.toastr.success(resp.message)

      console.log("resp:", resp.message);

      this.formValueFeedback.reset();
      this.router.params.subscribe(({ id }) => {
        if (id) {
          this.productService.getProduct(id).subscribe((data: any) => {
            this.products = data.products;
            console.log("commets:", this.products);
          })
        }

      })
    })

  }


  handleAddToCart() {
    this.user = JSON.parse(localStorage.getItem("user") as string)?.auth
    if (!this.user) {
      this.toastr.info("Bạn cần đăng nhập để thực hiện hàng động này", "Nhắc nhở")
    }
    else {
      const cartItem = {
        userId: this.user._id,
        productId: this.products._id,
        quantity: 1,
        total: Number(this.products.price)
        // total: this.products.price / 100 * (100 - this.product.discount)
      }

      this.cartService.create(cartItem).subscribe((data) => {
        this.toastr.success(data.message, "Chúc mừng")
      })

    }
  }



  // cart
  handleAddToCartDetail(productId: any) {
    this.user = JSON.parse(localStorage.getItem("user") as string)?.auth
    console.log(this.user);

    if (!this.user) {
      this.toastr.info("Bạn cần đăng nhập để thực hiện hàng động này", "Nhắc nhở")
    }
    else {
      console.log(productId)
      const cartItem = {
        userId: this.user._id,
        productId: productId._id,
        quantity: 1,
        total: Number(productId.price)
      }

      this.cartService.create(cartItem).subscribe((data) => {
        console.log(data);

        this.toastr.success(data.message, "Chúc mừng")
      })

    }
  }
}