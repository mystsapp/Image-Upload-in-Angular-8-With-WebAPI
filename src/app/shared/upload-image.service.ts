import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private http: HttpClient) { }

  postFile(caption: string, fileToUpload: File) {
    const endPoint = 'http://localhost:62820/api/UploadImage';
    const formData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('ImageCaption', caption);
    
    return this.http.post(endPoint, formData);
  }
}
