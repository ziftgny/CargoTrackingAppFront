import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  
   url = "https://localhost:7125/api/Calisan/";
    http = inject(HttpClient);
    confirmLogin(tc_no: string,password:string){
      const fullurl = this.url+"getcalisanlogincheck?tc_no="+tc_no+"&password="+password;
      return this.http.get<boolean>(fullurl);
    }
}
