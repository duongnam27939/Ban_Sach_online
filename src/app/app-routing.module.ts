import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutUserComponent } from './Layout/layout-user/layout-user.component';
import { LayoutAdminComponent } from './Layout/layout-admin/layout-admin.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoryComponent } from './pages/category/category.component';
// import { HomepagesComponent } from './pages/homepages/homepages.component';
// import { LayoutAdminComponent } from './Layout/layout-admin/layout-admin.component';
// import { SignupComponent } from './pages/signup/signup.component';
// import { LoginComponent } from './pages/login/login.component';
// import { CartComponent } from './pages/cart/cart.component';
// import { CategoryComponent } from './pages/category/category.component';
// import { CategoryAddComponent } from './pages/category-add/category-add.component';
// import { CategoryEditComponent } from './pages/category-edit/category-edit.component';
// import { ProductsComponent } from './pages/products/products.component';
// import { ProductsAddComponent } from './pages/products-add/products-add.component';
// import { ProductsEditComponent } from './pages/products-edit/products-edit.component';
// import { ListUserComponent } from './pages/list-user/list-user.component';
// import { UserEditComponent } from './pages/user-edit/user-edit.component';
// import { PagesDetailComponent } from './pages/pages-detail/pages-detail.component';
// import { CategoryDetailComponent } from './pages/category-detail/category-detail.component';
// import { ProductsSearchComponent } from './pages/products-search/products-search.component';


const routes: Routes = [
  {
    path: '', component: LayoutUserComponent, children: [
      // { path: '', component: HomepagesComponent },
      // { path: 'pages-detail/:id', component: PagesDetailComponent },
      // { path: 'category-detail/:id', component: CategoryDetailComponent },
      // { path: 'search', component: ProductsSearchComponent },
      { path: 'cart', component: CartComponent },

    ]
  },
  {
    path: 'admin', component: LayoutAdminComponent, children: [
      { path: 'category', component: CategoryComponent },
      // { path: 'category/add', component: CategoryAddComponent },
      // { path: 'category/:id/edit', component: CategoryEditComponent },
      // { path: 'products', component: ProductsComponent },
      // { path: 'products/add', component: ProductsAddComponent },
      // { path: 'products/:id/edit', component: ProductsEditComponent },
      // { path: 'user', component: ListUserComponent },
      // { path: 'user/:id/edit', component: UserEditComponent },
    ]
  },
  // { path: 'sigup', component: SignupComponent },
  // { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
