import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitesseComponent } from './vitesse.component';

describe('VitesseComponent', () => {
  let component: VitesseComponent;
  let fixture: ComponentFixture<VitesseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitesseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
