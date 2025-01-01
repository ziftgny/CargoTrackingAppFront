export class KargoModel  {
    takip_no?:string=undefined;
    gonderici_tc:string="";
    alici_tc:string="";
    kabul_tarihi:Date=new Date(1,1,1);
    paket_turu_id:number=0;
    fiyat:number=0;
    agirlik:number=0;
    teslim_tarihi?:Date=undefined;
    kargo_durumu_id:number=0;
    son_islem_tarihi?:Date=undefined;
    teslim_alan_kisi?:string="";
    kurye_id?:number=undefined;
    constructor(init?: Partial<KargoModel>) {
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