import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../core/service/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-log-in',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {


  isloading:boolean=false;
  errormsg:string='';

 constructor(private auth:AuthService , private router:Router){}

 loginform:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.email,Validators.required]),
  password:new FormControl(null,[Validators.minLength(5),Validators.required]),
   })
   submit(){
    if(this.loginform.valid){
      console.log(this.loginform)
      this.isloading=true
      this.auth.login(this.loginform.value).subscribe({
        next:(res)=>{console.log(res)
          this.isloading=false
          this.router.navigate(['./home'])
          localStorage.setItem('userToken',res.token)
        },
        error:(err)=>{console.log(err)
          this.isloading=false
          this.errormsg=err.error.message
        }
      })
      }else{this.loginform.markAllAsTouched()}
    
    }
  
}
