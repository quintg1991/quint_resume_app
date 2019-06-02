import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDetailPage } from './language-detail.page';

describe('LanguageDetailPage', () => {
  let component: LanguageDetailPage;
  let fixture: ComponentFixture<LanguageDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
