import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioComponents } from './portfolio-components';

describe('PortfolioComponents', () => {
  let component: PortfolioComponents;
  let fixture: ComponentFixture<PortfolioComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
