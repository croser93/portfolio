import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponents } from './contact-components';

describe('ContactComponents', () => {
  let component: ContactComponents;
  let fixture: ComponentFixture<ContactComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
