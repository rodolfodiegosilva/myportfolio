import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  @Input() icon: string;
  @Input() imagestyle: string;
  @Input() image: string;
  @Input() images: string[];
  imageiterations = [];

  constructor() {}

  ngOnInit(): void {
    if (this.images){
      this.imageiterations = Array(this.images.length).fill(0).map((x, i) => i);
    }
  }
}
