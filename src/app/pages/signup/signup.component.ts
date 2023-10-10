import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/auth';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  user!: User
  submitted: boolean = false
  formSignup = this.formBuilder.group({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
    confirmPassword: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)]))
  }, { validator: this.MustchPassword('password', 'confirmPassword') })

  MustchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];
      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['MustchPassword']) {
        return
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ MustchPassword: true })
      } else {
        confirmPasswordControl.setErrors(null)
      }
    };
  }
  get checkValidate() {
    return this.formSignup.controls
  }


  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  onhandledSubmit() {
    this.submitted = true;
    this.auth.signup(this.formSignup.value).subscribe((data) => {
      Swal.fire({
        position: 'center',
        title: 'Đăng kí thành công',
        text: 'Bạn đã đăng kí thành công!',
        icon: 'success',
        confirmButtonText: 'OK',
        // iconHtml: '<i class="fas fa-user-check style="font-size: 10px;"></i>',
        iconHtml: '<i class="fas fa-check-circle"></i>'
      });
      this.router.navigate(['signup']);
    })
  }
}
