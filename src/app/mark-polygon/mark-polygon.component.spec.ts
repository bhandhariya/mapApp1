import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkPolygonComponent } from './mark-polygon.component';

describe('MarkPolygonComponent', () => {
  let component: MarkPolygonComponent;
  let fixture: ComponentFixture<MarkPolygonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkPolygonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkPolygonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
