import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../../services/Login/loginService.service';
import { LoginModel } from '../../model/Login';

@Component({
  standalone:true,
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {

  }
  constructor(private router: Router) {
    
  }
  check:boolean | undefined=undefined;
  login:LoginModel=new LoginModel();
  loginService=inject(LoginService);
  loginProcess():void{
    this.loginService.confirmLogin(this.login.tc_no,this.login.sifre).pipe(catchError((err)=>{
            console.log(err);
            throw err; 
          })).subscribe((result)=>{
            this.check=result;
            if (this.check==true) {
              this.router.navigate(['/kargoislem'])
            }
          })
  }
}
