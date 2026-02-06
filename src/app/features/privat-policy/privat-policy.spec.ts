import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatPolicy } from './privat-policy';

describe('PrivatPolicy', () => {
  let component: PrivatPolicy;
  let fixture: ComponentFixture<PrivatPolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivatPolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivatPolicy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
