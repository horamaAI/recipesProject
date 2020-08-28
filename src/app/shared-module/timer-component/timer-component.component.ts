import { Component } from '@angular/core';

@Component({
  selector: 'app-timer-component',
  templateUrl: './timer-component.component.html',
  styleUrls: ['./timer-component.component.scss'],
})
export class TimerComponentComponent {

//  constructor() { }

//  ngOnInit() {}
  public timeBegan = null;
  public timeStopped: any = null;
  public stoppedDuration: any = 0;
  public started = null;
  public running = false;
  public blankTime = '00:00.000';
  public time = '00:00.000';

  start() {
    if (this.running) {
      return;
    }

    if (this.timeBegan === null) {
        this.reset();
        this.timeBegan = new Date();
    }

    if (this.timeStopped !== null) {
      const newStoppedDuration: any = (+new Date() - this.timeStopped);
      this.stoppedDuration = this.stoppedDuration + newStoppedDuration;
    }

    this.started = setInterval(this.clockRunning.bind(this), 10);
    this.running = true;
  }

  stop() {
    this.running = false;
    this.timeStopped = new Date();
    clearInterval(this.started);
  }

  reset() {

    this.running = false;
    clearInterval(this.started);
    this.stoppedDuration = 0;
    this.timeBegan = null;
    this.timeStopped = null;
    this.time = this.blankTime;

  }

  zeroPrefix(num: number, digit: number) {
    let zero = '';
    for (let i = 0; i < digit; i++) {
      zero += '0';
    }
    return (zero + num).slice(-digit);
  }

  clockRunning(){

    const currentTime: any = new Date();
    const timeElapsed: any = new Date(currentTime - this.timeBegan - this.stoppedDuration);
    const hour = timeElapsed.getUTCHours();
    const min = timeElapsed.getUTCMinutes();
    const sec = timeElapsed.getUTCSeconds();
    const ms = timeElapsed.getUTCMilliseconds();

    this.time =
      this.zeroPrefix(hour, 2) + ':' +
      this.zeroPrefix(min, 2) + ':' +
      this.zeroPrefix(sec, 2) + '.' +
      this.zeroPrefix(ms, 3);
    }

}
