import { Directive, OnInit, OnDestroy } from '@angular/core';
import {LoggerService} from "../services/logger.service"

let nextId = 1
@Directive({
  selector: '[appSpy]'
})
export class SpyDirective {

  constructor(private loggerService: LoggerService) { }
  ngOnInit(){
    this.logIt('OnInit')
  }
  ngOnDestroy(){
    this.logIt('OnDestroy')
  }

  private logIt(msg: string){
    this.loggerService.log(`Spy #${nextId++} ${msg}`)
  }

}
