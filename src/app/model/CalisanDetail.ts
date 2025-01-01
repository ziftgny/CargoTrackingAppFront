export class CalisanDetailModel  {
    id:number=0;
    ad:string="";
    soyad:string="";
    sube:string="";
    tc_no:string="";
    sifre:string="";
    yetki:string="";
    constructor(init?: Partial<CalisanDetailModel>) {
        Object.assign(this, init);
      }
    // constructor() {
    //     this.id=0;
    //     this.gonderici_id=0;
    //     this.alici_id=0;
    //     this.kabul_tarihi=new Date(2023, 11, 28);
    //     this.paket_turu=0;
    //     this.fiyat=0;
    //     this.agirlik=0;
    //     this.teslim_tarihi=new Date(2023, 11, 28);
    //     this.kargo_durumu_id=0;
    //     this.son_islem_tarihi=new Date(2023, 11, 28);
    //     this.teslim_alan_kisi='';
    //     this.kurye_id=0;
    // }
}