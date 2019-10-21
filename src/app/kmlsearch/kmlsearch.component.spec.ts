import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmlsearchComponent } from './kmlsearch.component';

describe('KmlsearchComponent', () => {
  let component: KmlsearchComponent;
  let fixture: ComponentFixture<KmlsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmlsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmlsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
