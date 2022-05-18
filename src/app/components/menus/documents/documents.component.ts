import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {


  ngOnInit(): void {
  }
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService,private http:HttpClient) {}
  selecetdFile : File;
  onFileUpload(event){
  this.selecetdFile = event.target.files[0];
  }

  onUpload(event) {
      for (const file of event.files) {
          this.uploadedFiles.push(file);
      }
      this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
  }
}
