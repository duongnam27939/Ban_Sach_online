import { Component } from '@angular/core';
import { IProducts } from 'src/app/interface/products';
import { FormBuilder,Validators } from '@angular/forms';
import { ProductsService } from 'src/app/service/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent {
  category!: any;
  submitValue: boolean = false;
  products!:any;

  categoryForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    price: [0, [Validators.required]],
    author: ['', [Validators.required]],
    description: ['', [Validators.required]],
    quantity: [0, [Validators.required]],
    images: ['', [Validators.required]],
    categoryId: ['', [Validators.required]],
    sale: [0, [Validators.required]],
    tags:['',[Validators.required]],
    status: ['', [Validators.required]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private routers: Router,
    private router:ActivatedRoute
  ) {
    this.productsService.getCategory().subscribe((response: any) => {
      this.category = response.data
      
    })
    

    this.router.paramMap.subscribe(params=>{
      const _id = (params.get("id"));
      this.productsService.getProduct(_id).subscribe((response:any)=>{
        this.products = response.products
        console.log(_id);
        console.log(response.products.categoryId._id);

        this.categoryForm.patchValue({
          name:response.products.name,
          price:response.products.price,
          images:response.products.images,
          description:response.products.description,
          author:response.products.author,
          categoryId:response.products.categoryId._id,
          sale:response.products.sale,
          quantity:response.products.quantity,
          tags:response.products.tags,
          status:response.products.status
        })
        
      })
    })
    
  }


  onSelectImage(event: any) {
    this.files.push(...event.addedFiles);
    const file_data = this.files[0];
    const data = new FormData();
    data.append('file', file_data);
    data.append('upload_preset', 'upload');
    data.append('cloud_name', 'doa7mkkpq');
    this.productsService.uploadImage(data).subscribe(response => {
      const imageUrl = response.secure_url;
      this.categoryForm.patchValue({ images: imageUrl }); 
    });
  }

  files: any[] = [];
  url: any = []
  onRemovem(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);

  }



  onhandledSubmit() {
    this.submitValue = true
    if (this.categoryForm.valid) {
      const product: IProducts = {
        _id:this.products._id,
        name: this.categoryForm.value.name || '',
        price: this.categoryForm.value.price || 0,
        author: this.categoryForm.value.author || '',
        description: this.categoryForm.value.description || '',
        quantity: this.categoryForm.value.quantity || 0,
        images: this.categoryForm.value.images || '',
        sale: this.categoryForm.value.sale || 0,
        tags:this.categoryForm.value.tags || '',
        status:this.categoryForm.value.status || '',
        categoryId: this.categoryForm.value.categoryId || '',
        
      }
      console.log(product);     
        this.productsService.updateProduct(product).subscribe((data) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cập nhập sản phẩm thành công!',
            text: 'Sản phẩm đã được cập nhập thành công!',
            showConfirmButton: false,
            iconHtml: '<i class="fas fa-check-circle"></i>',
            timer: 2000
          })
          this.routers.navigate(['admin/products'])
        }, (error) => {
          alert("Cập nhập không thành công")
        
        })
    }
  }
}
