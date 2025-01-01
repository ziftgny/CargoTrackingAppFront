import { Component, inject, OnInit, signal } from '@angular/core';
import { catchError } from 'rxjs';
import { KargoService } from '../../services/Kargo/kargo.service';
import { KargoModel } from '../../model/Kargo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { KargoDetailModel } from '../../model/KargoDetail';
import { PaketTuruModel } from '../../model/PaketTuru';
import { KargoDurumModel } from '../../model/KargoDurum';
import { CalisanModel } from '../../model/Calisan';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-kargo',
  imports: [FormsModule,CommonModule,NavbarComponent,RouterModule,RouterOutlet],
  templateUrl: './kargo.component.html',
  styleUrl: './kargo.component.css'
})
export class KargoComponent implements OnInit {
  input="";
  KargoService = inject(KargoService);
  //Kargolar= signal<Array<KargoModel>>([]);
  KargoDetail: KargoDetailModel | null =null;
  paket_turleri : Array<PaketTuruModel>=[];
  kargo_durumlari : Array<KargoDurumModel>=[];
  kuryeler : Array<CalisanModel>=[];
  EklenecekKargo:KargoModel=new KargoModel();
  GuncellenecekKargo:KargoModel=new KargoModel();
  ngOnInit(): void {
      
      this.KargoService.getPaketTurleri().pipe(catchError((err)=>{
        console.log(err);
        throw err; 
      })).subscribe((result)=>{
        this.paket_turleri=result;
      })

      this.KargoService.getKargoDurumlari().pipe(catchError((err)=>{
        console.log(err);
        throw err; 
      })).subscribe((result)=>{
        this.kargo_durumlari=result
      })

      this.KargoService.getKuryeler().pipe(catchError((err)=>{
        console.log(err);
        throw err; 
      })).subscribe((result)=>{
        this.kuryeler=result;
      })
  }
  onSearch():void{
    console.log(this.KargoDetail)
    console.log(this.EklenecekKargo)

    if (this.input!="") {
      this.KargoService.getKargoDetail(this.input).pipe(catchError((err)=>{
        console.log(err);
        throw err; 
      })).subscribe((result)=>{
        this.KargoDetail=result;
      })
      this.KargoService.getKargo(this.input).pipe(catchError((err)=>{
        console.log(err);
        throw err; 
      })).subscribe((result)=>{
        this.GuncellenecekKargo=result;
      })
    }
    else{
      this.KargoDetail=null;
    }
  }
  CreateKargo():void{
    console.log(this.EklenecekKargo)
    
      this.KargoService.createKargo(this.EklenecekKargo).pipe(catchError((err)=>{
        console.log(err);
        throw err; 
      })).subscribe((result)=>{
        console.log('Kargo saved successfully!', result);
      }, error => {
        console.error('Error saving Kargo:', error);
      })
  }
  UpdateKargo():void{
    console.log(this.GuncellenecekKargo)
    
      this.KargoService.updateKargo(this.GuncellenecekKargo).pipe(catchError((err)=>{
        console.log(err);
        throw err; 
      })).subscribe((result)=>{
        console.log('Kargo updated successfully!', result);
        this.onSearch();
      }, error => {
        console.error('Error updating Kargo:', error);
      })
      
  }
  DeleteKargo():void{
    console.log(this.GuncellenecekKargo)
    
      this.KargoService.deleteKargo(this.GuncellenecekKargo.takip_no).pipe(catchError((err)=>{
        console.log(err);
        throw err; 
      })).subscribe((result)=>{
        console.log('Kargo deleted successfully!', result);
        this.onSearch();
      }, error => {
        console.error('Error deleting Kargo:', error);
      })
      
  }
  // onSearch():void{
  //   console.log('Search Term:', this.input);
  //   this.KargoService.getKargo(this.input).pipe(catchError((err)=>{
  //     console.log(err);
  //     throw err; 
  //   })).subscribe((item)=>{
  //     this.Kargo.set(item)
  //   })
  // }
}