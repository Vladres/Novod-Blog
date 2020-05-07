import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Article } from '../../Services/Articles/article.service';

@Component({
  selector: 'app-dialog-update',
  templateUrl: './dialog-update.component.html',
  styleUrls: ['./dialog-update.component.scss']
})
export class DialogUpdateComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Article ) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
