import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XOButtonComponent } from './x-o-button.component';

describe('XOButtonComponent', () => {
  let component: XOButtonComponent;
  let fixture: ComponentFixture<XOButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XOButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XOButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
