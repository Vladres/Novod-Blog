import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateComponent } from './dialog-update.component';

describe('DialogUpdateComponent', () => {
  let component: DialogUpdateComponent;
  let fixture: ComponentFixture<DialogUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
