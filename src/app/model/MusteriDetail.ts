export class MusteriDetailModel  {
    tc_no:string="";
    ad:string="";
    soyad:string="";
    telefon_no:string="";
    il:string="";
    ilce:string="";
    mah_sokak:string="";
    numara:string="";
    acik_adres:string="";

    constructor(init?: Partial<MusteriDetailModel>) {
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