import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('inputFile')
  inputFile: ElementRef;

  @ViewChild('progressBar')
  progressBar: ElementRef;

  uploadStatus: string = '';

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  sendFile() {
    let file: File = this.inputFile.nativeElement.files[0];
    let formData = new FormData();
    formData.append("file", file, "video.mov");

    this.http.post('http://localhost:5000/profile/upload', formData, {
      observe: 'events',
      reportProgress: true
    }).subscribe(event => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          console.log('Uploading....');
          let p = (event.loaded / event.total) * 100;
          (<HTMLProgressElement> this.progressBar.nativeElement).value = Math.round(p);
          this.uploadStatus = "Uploaded " + event.loaded + " bytes of " + event.total;
      break;
        case HttpEventType.Response:
          console.log('Response', event.status, event.body);
      break;
        default:
          return `File "x" surprising upload event: ${event.type}.`;
      }
    })
  }
}
