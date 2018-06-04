import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsRegisterComponent } from './news-register.component';

describe('NewsRegisterComponent', () => {
  let component: NewsRegisterComponent;
  let fixture: ComponentFixture<NewsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
