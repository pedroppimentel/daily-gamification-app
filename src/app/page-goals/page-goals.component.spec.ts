import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGoalsComponent } from './page-goals.component';

describe('PageGoalsComponent', () => {
  let component: PageGoalsComponent;
  let fixture: ComponentFixture<PageGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
