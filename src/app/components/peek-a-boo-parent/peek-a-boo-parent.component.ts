import { Component, OnInit } from '@angular/core';
import {LoggerService} from "../../services/logger.service"

@Component({
  selector: 'app-peek-a-boo-parent',
  templateUrl: './peek-a-boo-parent.component.html',
  styleUrls: ['./peek-a-boo-parent.component.css']
})
export class PeekABooParentComponent implements OnInit {
  hasChild = false
  hookLog: string[]
  heroName = 'WindStorm'

  constructor(
  private loggerService: LoggerService
  ) {
  }

  ngOnInit() {
    this.hookLog = this.loggerService.logs
  }

  toggleChild() {
    this.hasChild = !this.hasChild
    if (this.hasChild){
      this.heroName = 'WindStorm'
      this.loggerService.clear()
    }
    this.hookLog = this.loggerService.logs
    this.loggerService.tick()
  }

  updateHero() {
    this.heroName += '!'
    this.loggerService.tick()
  }

  clearLog(){
    this.loggerService.clear()
    this.loggerService.tick()
  }
}
