import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; import { ICategory } from 'src/app/interface/category';
;
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  categorys!: ICategory[];
  isShown: boolean = true;
  searchValue: any;

  allCategory!: ICategory[];
  //  listmist + page
  page : number = 1
  tabSize : number = 3;
  tabSizes : any[]= [2, 4 ,6 ,8,1000]
  count:number=0


  constructor(private category: CategoryService,
    private route: ActivatedRoute,
    private routers: Router) {
    this.category.getAllCategory().subscribe((response: any) => {
      this.categorys = response.data
      console.log(response.data);
      this.allCategory = response.data
    })
  }

  onHandleSubmit(){
    this.category.getAllCategory().subscribe((response: any) => {
      console.log(response.data)
      this.category = response.data
      this.allCategory = response.data
    }
    )
  }
  onHandleLimit(event:any){
    this.tabSize = event.target.value;
    console.log(event.target.value)
    this.page=1
    this.onHandleSubmit()
    console.log(this.onHandleSubmit());
    
  }
  
  onHandlesPage(event:any){
    this.page= event;
    this.onHandleSubmit()
  
  }

  removeId(_id: any) {
    this.category.deleteCategory(_id).subscribe((data) => {
      Swal.fire({
        title: 'Xác nhận xóa',
        text: 'Bạn có chắc chắn muốn xóa Danh mục?',
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
            title: 'Xóa danh mục thành công',
            text: 'Danh mục đã được xóa thành công!',
            showConfirmButton: false,
            timer: 2000,
            iconHtml: '<i class="fas fa-check-circle"></i>'
          });
          this.categorys = this.categorys.filter(item => item._id !== _id)
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
    console.log(`category:`, this.searchValue);
    this.isShown = true;
    if (this.searchValue === "") {
      this.category.getAllCategory().subscribe((response: any) => {
        this.categorys = response.data
        console.log(response.data);

      })
    } else {
      this.category.getAllCategory().subscribe((response: any) => {
        this.categorys = response.data.filter((data: any) => {
          return data.name.toLowerCase().includes(this.searchValue.toLowerCase());
        });
      });
    }
  }

}
