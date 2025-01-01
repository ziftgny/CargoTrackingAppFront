import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MusteriDetailModel } from '../../model/MusteriDetail';
import { MusteriService } from '../../services/Musteri/musteriService.service';
import { catchError } from 'rxjs';
import { IlModel } from '../../model/IlModel';
import { IlceModel } from '../../model/Ilce';
import { MusteriModel } from '../../model/Musteri';
import { AdresModel } from '../../model/Adres';

@Component({
  selector: 'app-musteri',
  imports: [FormsModule,CommonModule,NavbarComponent,RouterModule,RouterOutlet],
  templateUrl: './musteri.component.html',
  styleUrl: './musteri.component.css'
})
export class MusteriComponent implements OnInit {
  input="";
  musteriDetail:MusteriDetailModel | null=new MusteriDetailModel();
  MusteriService=inject(MusteriService);
  EklenecekMusteri:MusteriDetailModel =new MusteriDetailModel();
  GuncellenecekMusteri:MusteriDetailModel =new MusteriDetailModel();
  iller : Array<IlModel>=[];
  secilen_il:string="";
  secilen_il_update:string="";
  ilceler : Array<IlceModel>=[];
  ilceler_update : Array<IlceModel>=[];

  ngOnInit(): void {
    this.MusteriService.getIller().pipe(catchError((err)=>{
      console.log(err);
      throw err; 
    })).subscribe((result)=>{
      this.iller=result;
    })
  }
  createMusteri(){
    console.log(this.EklenecekMusteri)
    let musteriContainer:MusteriModel = new MusteriModel({
      ad:this.EklenecekMusteri.ad,
      soyad:this.EklenecekMusteri.soyad,
      tc_no:this.EklenecekMusteri.tc_no,
      telefon_no:this.EklenecekMusteri.telefon_no
    })
    let adresContainer:AdresModel = new AdresModel({
      acik_adres:this.EklenecekMusteri.acik_adres,
      il_id:this.EklenecekMusteri.il,
      ilce_id:this.EklenecekMusteri.ilce,
      mah_sokak:this.EklenecekMusteri.mah_sokak,
      numara:this.EklenecekMusteri.numara,
      musteri_tc:this.EklenecekMusteri.tc_no,
    })
    console.log(adresContainer)
    console.log(musteriContainer)
    this.MusteriService.createMusteri(musteriContainer).pipe(catchError((err)=>{
      console.log(err);
      throw err; 
    })).subscribe((result)=>{
      console.log('musteri saved successfully!', result);
        this.MusteriService.createAdres(adresContainer).pipe(catchError((err)=>{
          console.log(err);
          throw err; 
        })).subscribe((result)=>{
          console.log('adres saved successfully!', result);
        }, error => {
          console.error('Error saving Kargo:', error);
        })
    }, error => {
      console.error('Error saving Kargo:', error);
    })
  }
  
  updateMusteri(){
    console.log(this.GuncellenecekMusteri)
    let musteriContainer:MusteriModel = new MusteriModel({
      ad:this.GuncellenecekMusteri.ad,
      soyad:this.GuncellenecekMusteri.soyad,
      tc_no:this.GuncellenecekMusteri.tc_no,
      telefon_no:this.GuncellenecekMusteri.telefon_no
    })
    let adresContainer:AdresModel = new AdresModel({
      acik_adres:this.GuncellenecekMusteri.acik_adres,
      il_id:this.GuncellenecekMusteri.il,
      ilce_id:this.GuncellenecekMusteri.ilce,
      mah_sokak:this.GuncellenecekMusteri.mah_sokak,
      numara:this.GuncellenecekMusteri.numara,
      musteri_tc:this.GuncellenecekMusteri.tc_no,
    })
    this.MusteriService.getAddressIdByTcNo(adresContainer.musteri_tc).pipe(catchError((err)=>{
      console.log(err);
      throw err; 
    })).subscribe((result)=>{
      adresContainer.id=result;
      
    })

    this.MusteriService.updateMusteri(musteriContainer).pipe(catchError((err)=>{
      console.log(err);
      throw err; 
    })).subscribe((result)=>{
      console.log('musteri updated successfully!', result);
      console.log(adresContainer)
        this.MusteriService.updateAdres(adresContainer).pipe(catchError((err)=>{
          console.log(err);
          throw err; 
        })).subscribe((result)=>{
          console.log('adres updated successfully!', result);
          this.onSearch();
        }, error => {
          console.error('Error updating adres:', error);
        })
      this.onSearch();
    }, error => {
      console.error('Error updating musteri:', error);
    })
  }
  deleteMusteri(){
    let musteriContainer:MusteriModel = new MusteriModel({
      ad:this.GuncellenecekMusteri.ad,
      soyad:this.GuncellenecekMusteri.soyad,
      tc_no:this.GuncellenecekMusteri.tc_no,
      telefon_no:this.GuncellenecekMusteri.telefon_no
    })
    let adresContainer:AdresModel = new AdresModel({
      acik_adres:this.GuncellenecekMusteri.acik_adres,
      il_id:this.GuncellenecekMusteri.il,
      ilce_id:this.GuncellenecekMusteri.ilce,
      mah_sokak:this.GuncellenecekMusteri.mah_sokak,
      numara:this.GuncellenecekMusteri.numara,
      musteri_tc:this.GuncellenecekMusteri.tc_no,
    })
    this.MusteriService.getAddressIdByTcNo(adresContainer.musteri_tc).pipe(catchError((err)=>{
      console.log(err);
      throw err; 
    })).subscribe((result)=>{
      adresContainer.id=result;
      
    })
    console.log(adresContainer)
    this.MusteriService.deleteAdres(adresContainer).pipe(catchError((err)=>{
      console.log(err);
      throw err; 
    })).subscribe((result)=>{
      console.log('adres deleted successfully!', result);
      this.onSearch();
      this.MusteriService.deleteMusteri(this.GuncellenecekMusteri.tc_no).pipe(catchError((err)=>{
        console.log(err);
        throw err; 
      })).subscribe((result)=>{
        console.log('adres deleted successfully!', result);
        this.onSearch();
        
      }, error => {
        console.error('adres deleting Kargo:', error);
      })
    }, error => {
      console.error('adres deleting Kargo:', error);
    })

  }
  loadIlceler(){
    this.secilen_il=this.EklenecekMusteri.il
    this.MusteriService.getIlceler(this.secilen_il).pipe(catchError((err)=>{
      console.log(err);
      throw err; 
    })).subscribe((result)=>{
      this.ilceler_update=result
    })
  }
  loadIlcelerUpdate(){
    this.secilen_il_update=this.GuncellenecekMusteri.il
    this.MusteriService.getIlceler(this.secilen_il_update).pipe(catchError((err)=>{
      console.log(err);
      throw err; 
    })).subscribe((result)=>{
      this.ilceler=result
    })
  }
onSearch():void{
  console.log(this.input)
    console.log(this.musteriDetail)
    if (this.input!="") {
      this.MusteriService.getMusteriDetail(this.input).pipe(catchError((err)=>{
        console.log(err);
        throw err; 
      })).subscribe((result)=>{
        this.musteriDetail=result;
        this.GuncellenecekMusteri=result;
      })
    }
    else{
      this.musteriDetail=null;
    }
  }
  
}
