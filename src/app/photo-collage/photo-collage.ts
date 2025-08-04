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
      src: '/1.jpeg',
      alt: 'Riyan Memory 1',
      caption: 'Sweet memories we cherish 💖'
    },
    {
      id: 2,
      src: '/2.jpeg',
      alt: 'Riyan Memory 2',
      caption: 'Beautiful moments together ✨'
    },
    {
      id: 3,
      src: '/3.jpeg',
      alt: 'Riyan Memory 3',
      caption: 'Laughter and joy shared 😄'
    },
    {
      id: 4,
      src: '/4.jpeg',
      alt: 'Riyan Memory 4',
      caption: 'Adventures and fun times 🌟'
    },
    {
      id: 5,
      src: '/5.jpeg',
      alt: 'Riyan Memory 5',
      caption: 'Special celebrations 🎉'
    },
    {
      id: 6,
      src: '/6.jpeg',
      alt: 'Riyan Memory 6',
      caption: 'Treasured moments forever 🌸'
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