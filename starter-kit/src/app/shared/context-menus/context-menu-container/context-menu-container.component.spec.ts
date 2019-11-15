import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextMenuContainerComponent } from './context-menu-container.component';

describe('ContextMenuContainerComponent', () => {
  let component: ContextMenuContainerComponent;
  let fixture: ComponentFixture<ContextMenuContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContextMenuContainerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextMenuContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
