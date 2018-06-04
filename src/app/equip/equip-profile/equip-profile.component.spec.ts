import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipProfileComponent } from './equip-profile.component';

describe('EquipProfileComponent', () => {
  let component: EquipProfileComponent;
  let fixture: ComponentFixture<EquipProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
