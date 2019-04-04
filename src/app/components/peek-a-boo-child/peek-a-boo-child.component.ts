import { Component, OnInit, Input, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import {LoggerService} from "../../services/logger.service"

let nextId = 1

@Component({
  selector: 'app-peek-a-boo-child',
  templateUrl: './peek-a-boo-child.component.html',
  styleUrls: ['./peek-a-boo-child.component.css']
})
export class PeekABooChildComponent implements OnInit, OnChanges, DoCheck,
  AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {

  @Input() name: string
  private verb = 'initialized'
  constructor(private loggerService: LoggerService) {
    let is = this.name?'is':'is not'
    this.logIt(`name ${is} known  at construction`)
  }

  ngOnInit() {
    this.logIt('OnInit')
  }
  logIt(msg){
    this.loggerService.log(`#${nextId++} ${msg}`)
  }

  ngOnChanges(changes: SimpleChanges): void {
    let changesMsgs: string[] = []
    for (const propName in changes) {
      if (propName === 'name') {
        let name = changes[propName].currentValue
        changesMsgs.push(`name ${this.verb} to "${name}"`)
      }
      else {
        changesMsgs.push(`${propName} ${this.verb}`)
      }
    }
    this.logIt(`onChanges: ${changesMsgs.join('; ')}`)
  }
  ngDoCheck(): void {
    this.logIt('DoCheck')
  }
  ngAfterContentChecked(): void {
    this.logIt('AfterContentChecked')
  }
  ngAfterContentInit(): void {
    this.logIt('AfterContentInit')
  }
  ngAfterViewChecked(): void {
    this.logIt('AfterViewChecked')
  }
  ngAfterViewInit(): void {
    this.logIt('AfterViewInit')
  }
  ngOnDestroy(): void {
    this.logIt('OnDestroy')
  }

}
