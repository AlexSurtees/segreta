import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorePillsComponent } from './score-pills.component';

describe('ScorePillsComponent', () => {
  let component: ScorePillsComponent;
  let fixture: ComponentFixture<ScorePillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScorePillsComponent]
    });
    fixture = TestBed.createComponent(ScorePillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
