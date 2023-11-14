import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: any;
  constructor(private cartService: CartService){}
  ngOnInit() {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartService.get().subscribe(
      (data: any) => {
        this.cartItems = data.cartItems;
        console.log(data.cartItems);
        
      },
      (error: any) => {
        console.error('Failed to load cart items:', error);
      }
    );
  }

  removeFromCart(productId: string) {
    this.cartService.delete(productId).subscribe(
      (response: any) => {
        // Handle the response if needed
        console.log('Removed from cart:', response);
        // Refresh the cart items
        this.loadCartItems();
      },
      (error: any) => {
        // Handle error if needed
        console.error('Failed to remove from cart:', error);
      }
    );
  }

  formatCurrency(value: number): string {
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0
    });

    return formatter.format(value);
  }


  calculateTotal(): number {
    return this.cartItems.reduce((total:any, item:any) => total + (item.price * item.quantity), 0);
  }



}
