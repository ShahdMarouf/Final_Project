import { NotfoundComponent } from './layouts/notfound/notfound.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { BrandComponent } from './pages/brand/brand.component';
import { authGuard } from './core/guards/auth.guard';
import { loggedGuard } from './core/guards/logged.guard';

export const routes: Routes = [

    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"",component:AuthLayoutComponent, children:[
        {path:"login",canActivate:[loggedGuard],loadComponent:()=>import("./pages/log-in/log-in.component").then((c)=>c.LogInComponent),title:"Login"},
        {path:"register",canActivate:[loggedGuard],loadComponent:()=>import("./pages/register/register.component").then((c)=>c.RegisterComponent),title:"Register"},
        {path:"forget",canActivate:[loggedGuard],loadComponent:()=>import("./pages/forgetpassword/forgetpassword.component").then((c)=>c.ForgetpasswordComponent),title:"forgetPassword"}


    ] },
    {path:"",component:BlankLayoutComponent, children:[
        {path:"home",canActivate:[authGuard],loadComponent:()=>import("./pages/home/home.component").then((c)=>c.HomeComponent),title:"Home"},
        {path:"cart",canActivate:[authGuard],loadComponent:()=>import("./pages/cart/cart.component").then((c)=>c.CartComponent),title:"Cart"},
        {path:"products",canActivate:[authGuard],loadComponent:()=>import("./pages/products/products.component").then((c)=>c.ProductsComponent),title:"Products"},
        {path:"categories",canActivate:[authGuard],loadComponent:()=>import("./pages/categories/categories.component").then((c)=>c.CategoriesComponent),title:"Categories"},
        {path:"brands",canActivate:[authGuard],loadComponent:()=>import("./pages/brand/brand.component").then((c)=>c.BrandComponent),title:"Brands"},
        {path:"checkout/:id",canActivate:[authGuard],loadComponent:()=>import("./pages/check-out/check-out.component").then((c)=>c.CheckOutComponent),title:"checkOut"},
        {path:"allorders",canActivate:[authGuard],loadComponent:()=>import("./pages/allorders/allorders.component").then((c)=>c.AllordersComponent),title:"all orders"},

        {path:"details/:id",canActivate:[authGuard],loadComponent:()=>import("./pages/details/details.component").then((c)=>c.DetailsComponent),title:"details"},

    ]},

    {path:"**",component:NotfoundComponent,title:"Not_found"},


];
