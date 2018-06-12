import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDevolutionComponent } from './user-devolution.component';

describe('UserDevolutionComponent', () => {
  let component: UserDevolutionComponent;
  let fixture: ComponentFixture<UserDevolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDevolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDevolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
