import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoSoporteComponent } from './dato-soporte.component';

describe('DatoSoporteComponent', () => {
  let component: DatoSoporteComponent;
  let fixture: ComponentFixture<DatoSoporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatoSoporteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatoSoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
