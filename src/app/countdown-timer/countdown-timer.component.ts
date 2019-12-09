import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  private intervalId = 0;
  message = '';
  remainingTime: number;

  @Input() seconds = 11;

  clearTimer() {
    clearInterval(this.intervalId);
  }

  constructor() {
  }

  ngOnInit() {
    this.reset();
    this.start();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  private reset() {
    this.clearTimer();
    this.remainingTime = this.seconds;
    this.message = 'Click start button to start the Countdown';
  }

  private start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }

  private stop() {
    this.clearTimer();
    this.message = `Holding at ${this.remainingTime} seconds`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Blast off!';
        this.clearTimer();
      } else {
        this.message = `${this.remainingTime} second and counting`;
      }
    }, 1000);
  }
}
