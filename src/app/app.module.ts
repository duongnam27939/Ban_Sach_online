import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';
import { NgxPaginationModule } from "ngx-pagination";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutAdminComponent } from './Layout/layout-admin/layout-admin.component';
import { LayoutUserComponent } from './Layout/layout-user/layout-user.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoryComponent } from './pages/category/category.component';
import { CategoryAddComponent } from './pages/category-add/category-add.component';
import { CategoryEditComponent } from './pages/category-edit/category-edit.component';
import { CategoryDetailComponent } from './pages/category-detail/category-detail.component';
import { HomepagesComponent } from './pages/homepages/homepages.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { LoginComponent } from './pages/login/login.component';
import { PagesDetailComponent } from './pages/pages-detail/pages-detail.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsAddComponent } from './pages/products-add/products-add.component';
import { ProductsEditComponent } from './pages/products-edit/products-edit.component';
import { ProductsSearchComponent } from './pages/products-search/products-search.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';



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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    FormsModule,
    ClickOutsideModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
