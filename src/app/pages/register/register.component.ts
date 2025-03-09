import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  isloading:boolean=false;
  errormsg:string='';
  rightpass:boolean=true;
  constructor(private auth:AuthService , private router:Router){}
registerform:FormGroup=new FormGroup({
name:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
email:new FormControl(null,[Validators.email,Validators.required]),
password:new FormControl(null,[Validators.minLength(5),Validators.required]),
rePassword:new FormControl(null,Validators.required),
phone:new FormControl(null,[Validators.pattern(/^01[0125][0-9]{8}$/),Validators.required]),
 },this.confirmpassword)

submit(){
if(this.registerform.valid){
  console.log(this.registerform)
  this.isloading=true
  this.auth.register(this.registerform.value).subscribe({
    next:(res)=>{console.log(res)
      this.isloading=false
      this.router.navigate(['./login'])
    },
    error:(err)=>{console.log(err)
      this.isloading=false
      this.errormsg=err.error.message
    }
  })
  }else{this.registerform.markAllAsTouched()}

}

confirmpassword(form:AbstractControl){
  let password=form.get('password')?.value
  let repassword=form.get('rePassword')?.value
  if(password==repassword){
    return null
  }else{  this.rightpass=false
    return{missMatch:true

     };

  }

}
}
