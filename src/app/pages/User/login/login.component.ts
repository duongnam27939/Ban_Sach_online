import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isMatch: boolean = false

  user: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { this.user = JSON.parse(localStorage.getItem("user") as string) || null }
  formSigninValue = this.formBuilder.group({
    email: [null, [Validators.required]],
    password: [null, [Validators.required]],
  })



  onHandleSubmit = async () => {
    this.isMatch = true
    if (this.formSigninValue.valid) {
      // console.log(this.formSigninValue);


      this.auth.login(this.formSigninValue.value).subscribe((data) => {
        console.log(data?.message);
        this.toastr.info(data?.message)

        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('userName', data.auth.name);
        localStorage.setItem('role', data.auth.role);
        localStorage.setItem('email', data.auth.email);
        let token = localStorage.getItem('token');
        console.log(data.message);
        

        
        if (data.data) {
          this.isMatch = false
          localStorage.setItem("user", JSON.stringify(data))
          // console.log(resp);
          
          // this.user = JSON.parse(localStorage.getItem("user") as string) || null
        }
        this.router.navigate(['/'])
      })

    }
  }



}
