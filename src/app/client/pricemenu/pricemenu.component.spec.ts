import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricemenuComponent } from './pricemenu.component';

describe('PricemenuComponent', () => {
  let component: PricemenuComponent;
  let fixture: ComponentFixture<PricemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
