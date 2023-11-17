import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';
import { NgxPaginationModule } from "ngx-pagination";
import { ToastrModule, ToastNoAnimationModule } from 'ngx-toastr';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutAdminComponent } from './Layout/layout-admin/layout-admin.component';
import { LayoutUserComponent } from './Layout/layout-user/layout-user.component';
import { CartComponent } from './pages/User/cart/cart.component';
import { CategoryComponent } from './pages/Admin/admin-category/category/category.component';
import { CategoryAddComponent } from './pages/Admin/admin-category/category-add/category-add.component';
import { CategoryEditComponent } from './pages/Admin/admin-category/category-edit/category-edit.component';
import { CategoryDetailComponent } from './pages/User/category-detail/category-detail.component';
import { HomepagesComponent } from './pages/User/homepages/homepages.component';
import { ListUserComponent } from './pages/Admin/admin-user/list-user/list-user.component';
import { LoginComponent } from './pages/User/login/login.component';
import { PagesDetailComponent } from './pages/User/pages-detail/pages-detail.component';
import { ProductsComponent } from './pages/Admin/admin-products/products/products.component';
import { ProductsAddComponent } from './pages/Admin/admin-products/products-add/products-add.component';
import { ProductsEditComponent } from './pages/Admin/admin-products/products-edit/products-edit.component';
import { ProductsSearchComponent } from './pages/User/products-search/products-search.component';
import { SignupComponent } from './pages/User/signup/signup.component';
import { UserEditComponent } from './pages/Admin/admin-user/user-edit/user-edit.component';
import { ProductsDetailadminComponent } from './pages/Admin/admin-products/products-detailadmin/products-detailadmin.component';
import { DashboardComponent } from './pages/Admin/admin-dashboard/dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminOrderComponent } from './pages/Admin/order-admin/admin-order/admin-order.component';




@NgModule({
  declarations: [
    AppComponent,
    LayoutAdminComponent,
    LayoutUserComponent,
    CartComponent,
    CategoryComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    CategoryDetailComponent,
    HomepagesComponent,
    ListUserComponent,
    LoginComponent,
    PagesDetailComponent,
    ProductsComponent,
    ProductsAddComponent,
    ProductsEditComponent,
    ProductsSearchComponent,
    SignupComponent,
    UserEditComponent,
    ProductsDetailadminComponent,
    DashboardComponent,
    AdminOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    FormsModule,
    ClickOutsideModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
