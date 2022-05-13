import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/api/client';
import { DialogData } from 'src/app/api/dialogeData';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-authentification-dialog',
  templateUrl: './authentification-dialog.component.html',
  styleUrls: ['./authentification-dialog.component.scss']
})

export class AuthentificationDialogComponent implements OnInit {
  minPw = 8;
  dialogForm: FormGroup;
  client:Client;

  constructor(
    public dialogRef: MatDialogRef<AuthentificationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Client,private dialogBuilder: FormBuilder,private clientService:ClientService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  get password() { return this.dialogForm.get('password'); }
  ngOnInit(): void {
    console.log(this.data.email)
    this.dialogForm = this.dialogBuilder.group({
      password: ['', [Validators.required, Validators.minLength(this.minPw)]],
    });
    console.log('clientService');
    this.getEmail();
  }
  getEmail(){
    console.log(JSON.stringify(this.clientService.getClient()));
  }
  
  // getEmailClient(){
  //   this.client=this.clientService.getClient();

  // }

}