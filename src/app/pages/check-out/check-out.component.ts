import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../../core/service/order.service';

@Component({
  selector: 'app-check-out',
  imports: [ReactiveFormsModule],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss'
})
export class CheckOutComponent implements OnInit{
cartId!:string
checkOutForm!:FormGroup
  constructor(private ActivatedRoute:ActivatedRoute,private orders:OrderService){}
  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((p)=>{
      this.cartId=p.get('id') as string
    })
    console.log("cartId=",this.cartId)
    this.checkOutForm=new FormGroup({
      details:new FormControl(null,Validators.required),
      phone:new FormControl(null,Validators.required),
      city:new FormControl(null,Validators.required),

    })
   
  }
  submitForm(){
     console.log(this.checkOutForm.value) 
     this.orders.onlinePayment(this.cartId,this.checkOutForm.value).subscribe({
      next:(res)=>{console.log("online res=",res)
        window.open(res.session.url,"_self ")
      }
      ,error:(err)=>{console.log(err)}
     })
  }

}
