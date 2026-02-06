import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeComponents } from './about-me.components';

describe('AboutMeComponents', () => {
  let component: AboutMeComponents;
  let fixture: ComponentFixture<AboutMeComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
