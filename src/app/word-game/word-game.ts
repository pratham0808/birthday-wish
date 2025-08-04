import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface WordClue {
  word: string;
  clue: string;
  category: string;
}

@Component({
  selector: 'app-word-game',
  imports: [CommonModule, FormsModule],
  templateUrl: './word-game.html',
  styleUrl: './word-game.scss'
})
export class WordGame {
  // Words related to Riyan's interests and birthday
  wordList: WordClue[] = [
    { word: 'FLOWERS', clue: 'Riyan\'s favorite natural beauties 🌸', category: 'Interests' },
    { word: 'MAKEUP', clue: 'Art of enhancing beauty 💄', category: 'Beauty' },
    { word: 'SKINCARE', clue: 'Daily routine for glowing skin ✨', category: 'Beauty' },
    { word: 'COOKING', clue: 'Creating delicious masterpieces 👩‍🍳', category: 'Skills' },
    { word: 'MARKETING', clue: 'Professional expertise field 📈', category: 'Career' },
    { word: 'LUPIN', clue: 'Workplace where magic happens 💼', category: 'Career' },
    { word: 'BIRTHDAY', clue: 'Special celebration day 🎂', category: 'Celebration' },
    { word: 'TWENTYSIX', clue: 'Age milestone this year 🎉', category: 'Numbers' },
    { word: 'AUGUST', clue: 'Birth month of our star ⭐', category: 'Time' },
    { word: 'LIPSTICK', clue: 'Can never have too many! 💋', category: 'Beauty' }
  ];
  
  currentWord: WordClue = this.wordList[0];
  guessedWord: string[] = [];
  wrongGuesses: string[] = [];
  userInput: string = '';
  gameWon: boolean = false;
  gameLost: boolean = false;
  score: number = 0;
  currentIndex: number = 0;
  maxWrongGuesses: number = 6;
  
  constructor() {
    this.startNewGame();
  }
  
  startNewGame() {
    this.currentIndex = Math.floor(Math.random() * this.wordList.length);
    this.currentWord = this.wordList[this.currentIndex];
    this.guessedWord = new Array(this.currentWord.word.length).fill('_');
    this.wrongGuesses = [];
    this.userInput = '';
    this.gameWon = false;
    this.gameLost = false;
  }
  
  makeGuess() {
    if (!this.userInput || this.gameWon || this.gameLost) return;
    
    const letter = this.userInput.toUpperCase();
    this.userInput = '';
    
    if (this.currentWord.word.includes(letter)) {
      // Correct guess
      for (let i = 0; i < this.currentWord.word.length; i++) {
        if (this.currentWord.word[i] === letter) {
          this.guessedWord[i] = letter;
        }
      }
      
      // Check if word is complete
      if (!this.guessedWord.includes('_')) {
        this.gameWon = true;
        this.score += 10;
      }
    } else {
      // Wrong guess
      if (!this.wrongGuesses.includes(letter)) {
        this.wrongGuesses.push(letter);
      }
      
      if (this.wrongGuesses.length >= this.maxWrongGuesses) {
        this.gameLost = true;
      }
    }
  }
  
  nextWord() {
    this.startNewGame();
  }
  
  getDisplayWord(): string {
    return this.guessedWord.join(' ');
  }
  
  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.makeGuess();
    }
  }
}
