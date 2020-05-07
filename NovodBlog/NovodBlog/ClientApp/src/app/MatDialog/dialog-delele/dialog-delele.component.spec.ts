import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleleComponent } from './dialog-delele.component';

describe('DialogDeleleComponent', () => {
  let component: DialogDeleleComponent;
  let fixture: ComponentFixture<DialogDeleleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDeleleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
