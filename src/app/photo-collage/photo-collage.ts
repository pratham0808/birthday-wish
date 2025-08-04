import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Photo {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

@Component({
  selector: 'app-photo-collage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-collage.html',
  styleUrls: ['./photo-collage.scss']
})
export class PhotoCollageComponent {
  photos: Photo[] = [
    {
      id: 1,
      src: 'https://via.placeholder.com/300x400/FF6B6B/FFFFFF?text=Memory+1',
      alt: 'Birthday Memory 1',
      caption: 'Sweet moments together'
    },
    {
      id: 2,
      src: 'https://via.placeholder.com/400x300/4ECDC4/FFFFFF?text=Memory+2',
      alt: 'Birthday Memory 2',
      caption: 'Adventures we shared'
    },
    {
      id: 3,
      src: 'https://via.placeholder.com/350x350/45B7D1/FFFFFF?text=Memory+3',
      alt: 'Birthday Memory 3',
      caption: 'Laughter and joy'
    },
    {
      id: 4,
      src: 'https://via.placeholder.com/300x300/96CEB4/FFFFFF?text=Memory+4',
      alt: 'Birthday Memory 4',
      caption: 'Special celebrations'
    },
    {
      id: 5,
      src: 'https://via.placeholder.com/400x350/FFEAA7/333333?text=Memory+5',
      alt: 'Birthday Memory 5',
      caption: 'Beautiful memories'
    },
    {
      id: 6,
      src: 'https://via.placeholder.com/320x400/DDA0DD/FFFFFF?text=Memory+6',
      alt: 'Birthday Memory 6',
      caption: 'Cherished times'
    }
  ];

  selectedPhoto: Photo | null = null;

  openPhoto(photo: Photo) {
    this.selectedPhoto = photo;
  }

  closePhoto() {
    this.selectedPhoto = null;
  }

  trackByPhotoId(index: number, photo: Photo): number {
    return photo.id;
  }
}