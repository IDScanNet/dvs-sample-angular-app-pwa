import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebLibraryComponent } from './web-library.component';

describe('WebLibraryComponent', () => {
  let component: WebLibraryComponent;
  let fixture: ComponentFixture<WebLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
