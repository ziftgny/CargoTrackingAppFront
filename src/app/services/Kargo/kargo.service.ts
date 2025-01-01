import { inject, Injectable } from '@angular/core';
import { KargoModel } from '../../model/Kargo';
import { HttpClient } from '@angular/common/http';
import { KargoDetailModel } from '../../model/KargoDetail';
import { PaketTuruModel } from '../../model/PaketTuru';
import { KargoDurumModel } from '../../model/KargoDurum';
import { CalisanModel } from '../../model/Calisan';

@Injectable({
  providedIn: 'root'
})
export class KargoService {
  url = "https://localhost:7125/api/Kargo/";
  http = inject(HttpClient);
  getKargolar(){
    const fullurl = this.url+"getall";
    return this.http.get<Array<KargoModel>>(fullurl);
  }
  getKargo(id: string){
    const fullurl = this.url+"get?takip_no="+id;
    return this.http.get<KargoModel>(fullurl);
  }
  getKargoDetail(id: string){
    const fullurl = this.url+"getdetail?takip_no="+id;
    return this.http.get<KargoDetailModel>(fullurl);
  }
  getPaketTurleri(){
    const fullurl = "https://localhost:7125/api/PaketTuru/getall";
    return this.http.get<Array<PaketTuruModel>>(fullurl);
  }
  getKargoDurumlari(){
    const fullurl = "https://localhost:7125/api/KargoDurum/getall";
    return this.http.get<Array<KargoDurumModel>>(fullurl);
  }
  getKuryeler(){
    const fullurl = "https://localhost:7125/api/Calisan/getallkurye";
    return this.http.get<Array<CalisanModel>>(fullurl);
  }
  createKargo( kargo: KargoModel){
    const fullurl = this.url+"add";
    return this.http.post(fullurl,kargo);
  }
  updateKargo( kargo: KargoModel){
    const fullurl = this.url+"update";
    return this.http.post(fullurl,kargo);
  }
  deleteKargo( takip_no: string | undefined){
    const fullurl = this.url+"delete?takip_no="+takip_no;
    return this.http.delete(fullurl);
  }
  constructor() { }
}
