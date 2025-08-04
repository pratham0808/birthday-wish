import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-postcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './postcard.html',
  styleUrls: ['./postcard.scss']
})
export class PostcardComponent {
  isFlipped = false;

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }

  getCurrentDate(): string {
    // Return Riyan's birthday date instead of current date
    return `AUG 6 2025`;
  }
}