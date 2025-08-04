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
    const today = new Date();
    const month = today.toLocaleString('default', { month: 'short' }).toUpperCase();
    const day = today.getDate();
    const year = today.getFullYear();
    return `${month} ${day} ${year}`;
  }
}