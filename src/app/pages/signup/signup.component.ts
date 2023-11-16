import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  user: any = null;
  submitted: boolean = false
  isMatch: boolean = false
  formSignupValue = this.formBuilder.group({
    email: [null, [Validators.required]],
    password: [null, [Validators.required]],
    name: [null, [Validators.required]],
    confirmPassword: [null, [Validators.required]],
  })


  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.user = JSON.parse(localStorage.getItem("user") as string) || null
  }

  // onhandledSubmit() {
  //   this.submitted = true;
  //   this.auth.signup(this.formSignupValue.value).subscribe((data) => {
  //     Swal.fire({
  //       position: 'center',
  //       title: 'Đăng kí thành công',
  //       text: 'Bạn đã đăng kí thành công!',
  //       icon: 'success',
  //       confirmButtonText: 'OK',
  //       // iconHtml: '<i class="fas fa-user-check style="font-size: 10px;"></i>',
  //       iconHtml: '<i class="fas fa-check-circle"></i>'
  //     });
  //     this.router.navigate(['signup']);
  //   })
  // }

  // handleSignup = async () => {
  //   this.isMatch = true
  //   console.log(this.formSignupValue);

  //   if (this.formSignupValue.valid) {
  //     this.auth.signup(this.formSignupValue.value).subscribe((resp) => {
  //       this.toastr.info(resp.message)
  //       if (resp.data) {
  //         this.isMatch = false
  //       }
  //     })
  //   }
  //   this.router.navigate(['login']);
  // }

  // onhandledSubmit = async () => {
  //   this.isMatch = true
  //   if (this.formSignupValue.valid) {
  //     // console.log(this.formSigninValue);
  //     this.auth.signup(this.formSignupValue.value).subscribe((data) => {
  //       console.log(data?.message);
  //       this.toastr.info(data?.message)
  //       if (data.data) {
  //       }
  //       this.router.navigate(['login']);

  //     })

  //   }
  // }

  onhandledSubmit = async () => {
    this.isMatch = true
    console.log(this.formSignupValue);

    if (this.formSignupValue.valid) {
      this.auth.signup(this.formSignupValue.value).subscribe((resp) => {
        this.toastr.info(resp.message)
        if (resp.data) {
          this.isMatch = false
          this.router.navigate(['login']);
        }

      })
    }
  }
}
