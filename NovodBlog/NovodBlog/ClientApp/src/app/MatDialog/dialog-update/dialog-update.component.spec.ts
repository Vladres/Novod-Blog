import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateComponent } from './dialog-update.component';
import { MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('DialogUpdateComponent', () => {
  let component: DialogUpdateComponent;
  let fixture: ComponentFixture<DialogUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogUpdateComponent],
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
    fixture = TestBed.createComponent(DialogUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
