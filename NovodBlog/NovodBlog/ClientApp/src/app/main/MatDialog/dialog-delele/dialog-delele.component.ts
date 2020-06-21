import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delele',
  templateUrl: './dialog-delele.component.html',
  styleUrls: ['./dialog-delele.component.scss']
})
export class DialogDeleleComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogDeleleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number) { }

  ngOnInit(): void {
  }

}
