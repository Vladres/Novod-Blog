import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleleComponent } from './dialog-delele.component';
import { MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('DialogDeleleComponent', () => {
  let component: DialogDeleleComponent;
  let fixture: ComponentFixture<DialogDeleleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogDeleleComponent],
      imports: [
        MatDialogModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {}  }
      ]
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
