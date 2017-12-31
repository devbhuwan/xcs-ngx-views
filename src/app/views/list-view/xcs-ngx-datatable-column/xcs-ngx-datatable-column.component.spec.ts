import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XcsNgxDatatableColumnComponent } from './xcs-ngx-datatable-column.component';

describe('XcsNgxDatatableColumnComponent', () => {
  let component: XcsNgxDatatableColumnComponent;
  let fixture: ComponentFixture<XcsNgxDatatableColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XcsNgxDatatableColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XcsNgxDatatableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
