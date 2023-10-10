import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutAdminComponent } from './Layout/layout-admin/layout-admin.component';
import { LayoutUserComponent } from './Layout/layout-user/layout-user.component';
import { CartComponent } from './pages/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutAdminComponent,
    LayoutUserComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    FormsModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
