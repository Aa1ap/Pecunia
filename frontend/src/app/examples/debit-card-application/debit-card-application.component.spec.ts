import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitCardApplicationComponent } from './debit-card-application.component';

describe('DebitCardApplicationComponent', () => {
  let component: DebitCardApplicationComponent;
  let fixture: ComponentFixture<DebitCardApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebitCardApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitCardApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
