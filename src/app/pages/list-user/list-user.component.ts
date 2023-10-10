import { Component } from '@angular/core';
import { User } from 'src/app/interface/auth';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent {
  user!: User[];
  isShown: boolean = true;
  searchValue: any;
  constructor(private userService: UserService) {
    this.userService.geAlltUser().subscribe((response: any) => {
      this.user = response.data
      console.log(response.data);
    })
  }
  removeId(_id: any) {
    this.userService.removeUser(_id).subscribe((data) => {
      Swal.fire({
        title: 'Xác nhận xóa',
        text: 'Bạn có chắc chắn muốn xóa tài khoản này ko?',
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
            title: 'Xóa sản tài khoản thành công',
            text: 'Tài khoản đã được xóa thành công!',
            showConfirmButton: false,
            timer: 2000,
            iconHtml: '<i class="fas fa-check-circle"></i>'
          });
          this.user = this.user.filter(item => item._id !== _id)
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Hủy bỏ',
            'Dữ liệu không bị xóa.',
            'info'
          );
        }
      });
    })
  }


  onSearch() {
    console.log(`user:`, this.searchValue);
    this.isShown = true;
    if (this.searchValue === "") {
      this.userService.geAlltUser().subscribe((response: any) => {
        this.user = response.data
        console.log(response.data);
      })
    } else {
      this.userService.geAlltUser().subscribe((response: any) => {
        this.user = response.data.filter((data: any) => {
          const productNameMatch = data.name.toLowerCase().includes(this.searchValue.toLowerCase());
          const emailNameMatch = data.email.toLowerCase().includes(this.searchValue.toLowerCase());
          return productNameMatch || emailNameMatch;
        });
      });
    }
  }

}
