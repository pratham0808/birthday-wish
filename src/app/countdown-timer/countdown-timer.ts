import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countdown-timer',
  imports: [CommonModule],
  templateUrl: './countdown-timer.html',
  styleUrl: './countdown-timer.scss'
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  
  private intervalId: any;
  private targetDate: Date;
  
  constructor() {
    // Set target date to next birthday (you can customize this)
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    
    // Set birthday date (Month is 0-indexed, so 7 = August)
    // Birthday: August 6th, 2025
    let birthdayThisYear = new Date(2025, 7, 6); // August 6th, 2025
    
    // If birthday has already passed this year, set it for next year
    if (birthdayThisYear < currentDate) {
      birthdayThisYear = new Date(2026, 7, 6);
    }
    
    this.targetDate = birthdayThisYear;
  }
  
  ngOnInit() {
    this.updateCountdown();
    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }
  
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  
  private updateCountdown() {
    const currentTime = new Date().getTime();
    const targetTime = this.targetDate.getTime();
    const difference = targetTime - currentTime;
    
    if (difference > 0) {
      this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
    } else {
      // Birthday has arrived!
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
  }
  
  get isBirthdayToday(): boolean {
    return this.days === 0 && this.hours === 0 && this.minutes === 0 && this.seconds === 0;
  }
}
