import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KargoComponent } from './kargo.component';

describe('KargoComponent', () => {
  let component: KargoComponent;
  let fixture: ComponentFixture<KargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KargoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
