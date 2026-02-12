import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesComponents } from './references-components';

describe('ReferencesComponents', () => {
  let component: ReferencesComponents;
  let fixture: ComponentFixture<ReferencesComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferencesComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferencesComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
