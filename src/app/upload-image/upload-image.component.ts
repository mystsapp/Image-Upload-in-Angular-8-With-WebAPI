import { Component, OnInit } from '@angular/core';
import { UploadImageService } from '../shared/upload-image.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  imageUrl = '/assets/img/default-image.png';
  fileToUpload: File = null;

  constructor(private service: UploadImageService) { }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    // show image priview
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };

    reader.readAsDataURL(this.fileToUpload);
  }

  onSubmit(caption, image) {
    this.service.postFile(caption.value, this.fileToUpload).subscribe(data => {
      console.log('done');
      caption.value = null;
      image.value = null;
      this.imageUrl = '/assets/img/default-image.png';
    });
  }

}
