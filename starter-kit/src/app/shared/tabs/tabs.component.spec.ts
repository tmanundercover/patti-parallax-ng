import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTabsComponent } from './tabs.component';

describe('TabsComponent', () => {
  let component: CategoryTabsComponent;
  let fixture: ComponentFixture<CategoryTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryTabsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
