import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketAboutComponent } from './rocket-about.component';

describe('RocketAboutComponent', () => {
  let component: RocketAboutComponent;
  let fixture: ComponentFixture<RocketAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
