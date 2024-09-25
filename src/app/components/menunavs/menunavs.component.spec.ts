import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenunavsComponent } from './menunavs.component';

describe('MenunavsComponent', () => {
  let component: MenunavsComponent;
  let fixture: ComponentFixture<MenunavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenunavsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenunavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
