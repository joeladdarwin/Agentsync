import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Agentregister1Component } from './agentregister1.component';

describe('Agentregister1Component', () => {
  let component: Agentregister1Component;
  let fixture: ComponentFixture<Agentregister1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agentregister1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agentregister1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
