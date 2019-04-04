import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core'
import {Hero} from "../../classes/hero"

@Component({
  selector: 'app-on-change',
  templateUrl: './on-change.component.html',
  styleUrls: ['./on-change.component.css']
})
export class OnChangeComponent implements OnInit, OnChanges {
  @Input() hero: Hero
  @Input() power: string
  constructor() { }
  changeLog: string[] = []
  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let proName in changes){
      let change = changes[proName]
      let cur = JSON.stringify(change.currentValue)
      let pre = JSON.stringify(change.previousValue)
      this.changeLog.push(`${proName}: currentValue = ${cur}, previousValue = ${pre}`)
    }
  }

  reset(){
    this.changeLog = []
  }

}
