import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logs: string[] = []
  prevMsg = ''
  prevMsgCount = 1

  log(msg: string) {
    if (msg === this.prevMsg) {
      // update the last entry with count
      this.logs[this.logs.length - 1] = `${msg} (${this.prevMsgCount += 1}x)`
    }
    else {
      // new msg, log it
      this.logs.push(this.prevMsg = msg)
      this.prevMsgCount += 1
    }
  }
  clear() {
    this.logs = []
  }

  // schedules a view refresh to ensure display catches up
  tick() {  this.tick_then(() => { }); }
  tick_then(fn: () => any) { setTimeout(fn, 0); }

}
