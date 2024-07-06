import { Component, OnInit } from '@angular/core';
import { XOButtonComponent } from '../x-o-button/x-o-button.component';
import { NgClass, NgFor, NgForOf, NgIf } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    XOButtonComponent,
    NgFor,
    NgIf,
    NgForOf,
    NgClass,
    MatButtonModule
    
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.sass'
})
export class BoardComponent implements OnInit {
  square: any;
  isNextPlayer!: boolean;
  winner: any;
  ngOnInit(): void {
    this.startNewGame()
  }
  get player() {
    return this.isNextPlayer ? 'X' : 'O';
  }
  startNewGame ()  {
    this.square = Array(9).fill(null);
    this.winner = null;
    this.isNextPlayer = true;

  }
  playerChoice (index: number) {
    if (!this.square[index]) {
      this.square.splice(index, 1, this.player);
      this.isNextPlayer = !this.isNextPlayer
    }
    this.winner = this.winnerCalculation();
  }

  winnerCalculation() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3,  6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.square[a] && this.square[a] === this.square[b] &&
        this.square[a] === this.square[c]
      ) {
        return this.square[a]
      }
    }
    return null;
  }
  // winnerCalculation() {
  //   const lines = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6]
  //   ];
  
  //   let winner = null;
  
  //   lines.forEach(([a, b, c]) => {
  //     if (
  //       this.square[a] &&
  //       this.square[a] === this.square[b] &&
  //       this.square[a] === this.square[c]
  //     ) {
  //       winner = this.square[a];
  //     }
  //   });
  
  //   return winner;
  // }
  

}
