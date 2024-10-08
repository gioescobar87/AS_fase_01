import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketComponent } from './admin-ticket.component';

describe('AdminTicketComponent', () => {
  let component: AdminTicketComponent;
  let fixture: ComponentFixture<AdminTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
