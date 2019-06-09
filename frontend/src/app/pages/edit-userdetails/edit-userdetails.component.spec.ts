import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserdetailsComponent } from './edit-userdetails.component';

describe('EditUserdetailsComponent', () => {
  let component: EditUserdetailsComponent;
  let fixture: ComponentFixture<EditUserdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
