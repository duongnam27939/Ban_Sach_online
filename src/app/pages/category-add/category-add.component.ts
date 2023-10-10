import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interface/category';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent {
  submitValue: boolean = false;
  category!: ICategory;

  categoryForm = this.formBuilder.group({
    name: ['', [Validators.required]]
  })

  constructor(private formBuilder: FormBuilder,
    private cate: CategoryService,
    private routers: Router) { }

  onhandledSubmit() {
    this.submitValue = true
    if (this.categoryForm.valid) {
      const category: ICategory = {
        name: this.categoryForm.value.name || ''
      }
      this.cate.categoryAdd(category).subscribe((category) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'thêm Danh mục thành công!',
          text: 'Danh mục đã được thêm thành công!',
          showConfirmButton: false,
          iconHtml: '<i class="fas fa-check-circle"></i>',
          timer: 2000
        })
        this.routers.navigate(['admin/category'])
      }, (error) => {
        alert("Thêm không thành công")

      })
    }
  }
}
