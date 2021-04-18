import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton [disabled]="!isGameStarted" *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnChanges  {
    ngOnChanges(changes: SimpleChanges): void {
      console.log(this.value);
      console.log(this.isGameStarted);
    }

    @Input() value: 'X' | 'O';

    @Input() isGameStarted: boolean;

}
