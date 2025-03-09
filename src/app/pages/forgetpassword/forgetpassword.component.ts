import { AuthService } from './../../core/service/auth.service';
import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { log } from 'console';
@Component({
  selector: 'app-forgetpassword',
  imports: [ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent {
  email!: string;
  constructor(private auth:AuthService,private router:Router){}
  step:number=1
forgotpassword:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email])
})
verifyresetcode:FormGroup=new FormGroup({
  resetCode:new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]{6}$/)])
})
resetpassword:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  newPassword:new FormControl(null,[Validators.minLength(5),Validators.required])

})
forget(){
  this.email =this.forgotpassword.get('email')?.value
  this.resetpassword.get('email')?.patchValue(this.email)
  this.auth.forgetpassword(this.forgotpassword.value).subscribe({
    next:(res)=>{console.log("res=",res)
      this.step=2
    }
    ,error:(err)=>{console.log("err:",err)}
  })
}
confirm(){
  console.log("📤 Sending Data:", this.verifyresetcode.value);
  this.auth.verifycode(this.verifyresetcode.value).subscribe({
    next:(res)=>{console.log("res=",res)
      this.step=3
    }
    ,error:(err)=>{console.log("err:",err)}
  })
}

resetPassword(){
  this.auth.resetpassword(this.resetpassword.value).subscribe({
    next:(res)=>{console.log("res=",res)
      localStorage.setItem('userToken',res.token)
      this.router.navigate(['/home'])
    }
    ,error:(err)=>{console.log("err:",err)}
  })
}

}
