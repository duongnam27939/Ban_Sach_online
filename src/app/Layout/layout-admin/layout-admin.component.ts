import { Component } from '@angular/core';


@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss']
})
export class LayoutAdminComponent {
  userName = localStorage.getItem('userName');
  role = localStorage.getItem('role');
  email = localStorage.getItem('email');
  
  showAdmin = true;

  constructor() {
    console.log(this.role);
  }


  logout() {
    if (confirm('Bạn có muốn đăng xuất không ?')) {
      this.showAdmin = false;
      // Xóa token khỏi local storage
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
      localStorage.removeItem('role');


      this.userName = null;
      this.role = null;

    }
  }
}
