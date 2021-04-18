import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares: any[];
  xIsNext: boolean;
  winner: string;
  isgameStarted: boolean;
  moves: number;
  isGameTied: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isgameStarted = false;
    this.initializeGame();
  }

  initializeGame(){
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.isGameTied = false;
  }

  newGame() {
    this.initializeGame();
    this.isgameStarted = true;
    this.moves = 0;
  }
  endGame() {
    this.isgameStarted = false;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(index: number) {
    if(!this.squares[index]) {
      this.squares.splice(index, 1, this.player);
      this.xIsNext = !this.xIsNext;
      this.moves+=1;
    }
    this.winner = this.calculateWinner();
    if (this.winner || this.moves >= 9) {
      this.isGameTied = this.moves >= 9 && !this.winner;
      this.endGame();
    }

  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }


}
