import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqiustComponent } from './reqiust.component';

describe('ReqiustComponent', () => {
  let component: ReqiustComponent;
  let fixture: ComponentFixture<ReqiustComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReqiustComponent]
    });
    fixture = TestBed.createComponent(ReqiustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
