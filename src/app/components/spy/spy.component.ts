import { Component, OnInit } from '@angular/core';
import {LoggerService} from "../../services/logger.service"

@Component({
  selector: 'app-spy',
  templateUrl: './spy.component.html',
  styleUrls: ['./spy.component.css']
})
export class SpyComponent implements OnInit {

  constructor(public loggerService: LoggerService) { }
  newName = 'Herbie';
  heroes: string[] = ['Windstorm', 'Magneta'];

  ngOnInit() {
  }
  addHero(){
    if (this.newName.trim()){
      this.heroes.push(this.newName.trim())
      this.newName = ''
      this.loggerService.tick()
    }
  }
  removeHero(hero: string){
    this.heroes.splice(this.heroes.indexOf(hero), 1)
    this.loggerService.tick()
  }

  reset(){
    this.loggerService.log('-------reset-------')
    this.heroes = []
    this.loggerService.tick()
  }


}
