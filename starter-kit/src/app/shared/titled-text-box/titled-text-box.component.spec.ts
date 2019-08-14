import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitledTextBoxComponent } from './titled-text-box.component';

describe('TitledTextBoxComponent', () => {
  let component: TitledTextBoxComponent;
  let fixture: ComponentFixture<TitledTextBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TitledTextBoxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitledTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
