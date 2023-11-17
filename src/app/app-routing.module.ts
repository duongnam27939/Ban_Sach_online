import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutUserComponent } from './Layout/layout-user/layout-user.component';
import { LayoutAdminComponent } from './Layout/layout-admin/layout-admin.component';
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
import { ProductsDetailadminComponent } from './pages/User/products-detailadmin/products-detailadmin.component';
import { DashboardComponent } from './pages/Admin/admin-dashboard/dashboard/dashboard.component';
import { AdminOrderComponent } from './pages/Admin/order-admin/admin-order/admin-order.component';





const routes: Routes = [
  {
    path: '', component: LayoutUserComponent, children: [
      { path: '', component: HomepagesComponent },
      { path: 'pages-detail/:id', component: PagesDetailComponent },
      { path: 'category-detail/:id', component: CategoryDetailComponent },
      { path: 'search', component: ProductsSearchComponent },
      { path: 'cart', component: CartComponent },

    ]
  },
  {
    path: 'admin', component: LayoutAdminComponent, children: [
      { path: 'category', component: CategoryComponent },
      { path: 'category/add', component: CategoryAddComponent },
      { path: 'category/:id/edit', component: CategoryEditComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/add', component: ProductsAddComponent },
      { path: 'products/:id/edit', component: ProductsEditComponent },
      { path: 'user', component: ListUserComponent },
      { path: 'user/:id/edit', component: UserEditComponent },
      { path: "products/:id", component: ProductsDetailadminComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "order", component: AdminOrderComponent }

    ]
  },
  { path: 'sigup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
