import { Routes } from '@angular/router';
import { KargoComponent } from './component/kargo/kargo.component';
import { MusteriComponent } from './component/musteri/musteri.component';
import { LoginComponent } from './component/login/login.component';
import { CalisanComponent } from './component/calisan/calisan.component';
import { SorgulaComponent } from './component/sorgula/sorgula.component';

export const routes: Routes = [
    {path:"",component:LoginComponent,pathMatch:"full"},
    {path:"kargoislem",component:KargoComponent},
    {path:"musteriislem",component:MusteriComponent},
    {path:"calisanislem",component:CalisanComponent},
    {path:"sorgula",component:SorgulaComponent},

];
