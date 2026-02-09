import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponents } from './skills-components';

describe('SkillsComponents', () => {
  let component: SkillsComponents;
  let fixture: ComponentFixture<SkillsComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
