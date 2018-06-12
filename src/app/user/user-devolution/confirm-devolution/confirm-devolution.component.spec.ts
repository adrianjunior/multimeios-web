import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDevolutionComponent } from './confirm-devolution.component';

describe('ConfirmDevolutionComponent', () => {
  let component: ConfirmDevolutionComponent;
  let fixture: ComponentFixture<ConfirmDevolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDevolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDevolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
