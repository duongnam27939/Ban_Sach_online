import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss']
})
export class LayoutAdminComponent {
  userName = localStorage.getItem('userName');
  role = localStorage.getItem('role');
  email = localStorage.getItem('email');
  isLoggedIn = localStorage.getItem('isLoggedIn')
  showAdmin = true;

  constructor(private router: Router,) {
    
    console.log(this.role);
  }


  logout() {
    Swal.fire({
      title: 'Đăng xuất',
      text: "Bạn chắc là muốn Đăng xuất chứ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.showAdmin = false;
        // Xóa token khỏi local storage
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        localStorage.removeItem('role');
  
        this.userName = null;
        this.role = null;
  
        Swal.fire(
          'Đăng xuất!',
          'Đăng xuất thành công',
          'success'
        );
        this.router.navigate(['/'])
      }
    });
  }
}
