import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicToolsListComponent } from './music-tools-list.component';

describe('MusicToolsListComponent', () => {
  let component: MusicToolsListComponent;
  let fixture: ComponentFixture<MusicToolsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicToolsListComponent]
    });
    fixture = TestBed.createComponent(MusicToolsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
