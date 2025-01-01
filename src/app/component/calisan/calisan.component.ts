import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CalisanDetailModel } from '../../model/CalisanDetail';

@Component({
  selector: 'app-calisan',
  imports: [FormsModule,CommonModule,NavbarComponent,RouterModule,RouterOutlet],
  templateUrl: './calisan.component.html',
  styleUrl: './calisan.component.css'
})
export class CalisanComponent {
 calisanDetail:CalisanDetailModel = new CalisanDetailModel();
}
