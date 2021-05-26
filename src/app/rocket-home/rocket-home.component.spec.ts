import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketHomeComponent } from './rocket-home.component';

describe('RocketHomeComponent', () => {
  let component: RocketHomeComponent;
  let fixture: ComponentFixture<RocketHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
