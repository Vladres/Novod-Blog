import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelComponent } from './admin-panel.component';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

describe('AdminPanelComponent', () => {
  let component: AdminPanelComponent;
  let fixture: ComponentFixture<AdminPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule /* or CommonModule */,
        FormsModule, ReactiveFormsModule,
        RouterTestingModule, HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        MatDialogModule
      ],
     
      providers: [HttpClient,
        { provide: MatDialogRef, useValue: {  } },
        
      ],
      declarations: [ AdminPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
