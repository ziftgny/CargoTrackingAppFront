import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MusteriDetailModel } from '../../model/MusteriDetail';
import { IlceModel } from '../../model/Ilce';
import { MusteriModel } from '../../model/Musteri';
import { AdresModel } from '../../model/Adres';
import { IlModel } from '../../model/IlModel';

@Injectable({
  providedIn: 'root'
})
export class MusteriService {
  url = "https://localhost:7125/api/Musteri/";
    http = inject(HttpClient);
    getMusteriDetail(tc_no: string){
      const fullurl = this.url+"getdetail?tc="+tc_no;
      return this.http.get<MusteriDetailModel>(fullurl);
    }
      getIller(){
        const fullurl = "https://localhost:7125/api/Adres/getiller";
        return this.http.get<Array<IlModel>>(fullurl);
      }
      getIlceler(il_id:string){
        const fullurl = "https://localhost:7125/api/Adres/getilceler?il_id="+il_id;
        return this.http.get<Array<IlceModel>>(fullurl);
      }
      createMusteri( musteri: MusteriModel){
          const fullurl = this.url+"add";
          return this.http.post(fullurl,musteri);
      }
      createAdres( adres: AdresModel){
        const fullurl = "https://localhost:7125/api/Adres/add";
        return this.http.post(fullurl,adres);
      }
      
      updateAdres( adres: AdresModel){
        const fullurl = "https://localhost:7125/api/Adres/update";
        return this.http.post(fullurl,adres);
      }
      deleteAdres( adres: AdresModel){
        const fullurl = "https://localhost:7125/api/Adres/delete";
        return this.http.post(fullurl,adres);
      }
      getAddressIdByTcNo( tc_no: string){
        const fullurl = "https://localhost:7125/api/Adres/getidbytcno?tc_no="+tc_no;
        return this.http.get<number>(fullurl);
    }
      updateMusteri( musteri: MusteriModel){
        const fullurl = this.url+"update";
        return this.http.post(fullurl,musteri);
    }
    deleteMusteri( tc_no: string){
      const fullurl = "https://localhost:7125/api/Adres/delete?tc="+tc_no;
      return this.http.delete(fullurl);
    }
  constructor() { }
}
