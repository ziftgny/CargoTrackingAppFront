export class LoginModel {
    tc_no:string="";
    sifre:string="";
    constructor(init?: Partial<LoginModel>) {
        Object.assign(this, init);
      }
}