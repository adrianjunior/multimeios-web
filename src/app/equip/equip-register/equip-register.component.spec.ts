import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipRegisterComponent } from './equip-register.component';

describe('EquipRegisterComponent', () => {
  let component: EquipRegisterComponent;
  let fixture: ComponentFixture<EquipRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
