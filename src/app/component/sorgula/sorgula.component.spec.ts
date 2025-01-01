import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorgulaComponent } from './sorgula.component';

describe('SorgulaComponent', () => {
  let component: SorgulaComponent;
  let fixture: ComponentFixture<SorgulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SorgulaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorgulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
