import { Component, signal, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import confetti from 'canvas-confetti';
import lottie, { AnimationItem } from 'lottie-web';
import AOS from 'aos';
import { Flower } from './flower/flower';
import { PhotoCollageComponent } from './photo-collage/photo-collage';
import { PostcardComponent } from './postcard/postcard';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer';
import { WordGame } from './word-game/word-game';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Flower, PhotoCollageComponent, PostcardComponent, CountdownTimerComponent, WordGame],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, AfterViewInit {
  protected readonly title = signal('birthday-wish');
  @ViewChild('birthdayCard', { static: false }) birthdayCard!: ElementRef;
  private isCardOpen = false;

  constructor() {
    // Auto-trigger confetti on load
    setTimeout(() => this.triggerConfetti(), 1000);
  }

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50
    });
  }

  ngAfterViewInit() {
    this.setupCardScrollTrigger();
  }

  private setupCardScrollTrigger() {
    if (!this.birthdayCard?.nativeElement) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.isCardOpen) {
          // Auto-open after 1 second when in view
          setTimeout(() => this.openCard(), 1000);
        }
      });
    }, {
      threshold: 0.5
    });
    
    observer.observe(this.birthdayCard.nativeElement);
  }

  openCard() {
    this.isCardOpen = !this.isCardOpen;
    
    if (this.isCardOpen) {
      this.birthdayCard.nativeElement.classList.add('open');
      // Trigger confetti when card opens
      setTimeout(() => this.triggerConfetti(), 1000);
    } else {
      this.birthdayCard.nativeElement.classList.remove('open');
    }
  }


  triggerConfetti() {
    // Create multiple bursts for maximum celebration!
    this.fireworksConfetti();
    
    setTimeout(() => this.starBurst(), 200);
    setTimeout(() => this.celebrationCannons(), 400);
    setTimeout(() => this.heartConfetti(), 600);
  }

  private fireworksConfetti() {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio: number, opts: any) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    // Fireworks pattern
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#FFD700', '#FF69B4', '#00CED1']
    });
    fire(0.2, {
      spread: 60,
      colors: ['#FF6347', '#32CD32', '#9370DB']
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ['#FF4500', '#7FFF00', '#DA70D6']
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ['#FFB347', '#40E0D0', '#FF1493']
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ['#00BFFF', '#FF8C00', '#FFD700']
    });
  }

  private starBurst() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#FFA500', '#FF69B4', '#00CED1'],
      shapes: ['star'],
      scalar: 1.5
    });
  }

  private celebrationCannons() {
    // Left cannon
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#FF69B4', '#FFD700', '#32CD32', '#FF6347']
    });

    // Right cannon  
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#9370DB', '#00CED1', '#7FFF00', '#DA70D6']
    });
  }

  private heartConfetti() {
    // Heart-colored confetti since custom shapes are complex
    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.5 },
      scalar: 1.5,
      gravity: 0.4,
      drift: 0.1,
      colors: ['#FF69B4', '#FF1493', '#DC143C', '#FF6347', '#FFB6C1', '#FFC0CB'],
      shapes: ['circle', 'square'],
      startVelocity: 30
    });
  }
}
