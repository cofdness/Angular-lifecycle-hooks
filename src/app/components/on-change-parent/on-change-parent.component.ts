import {Component, OnInit, ViewChild} from '@angular/core'
import {Hero} from "../../classes/hero"
import {OnChangeComponent} from "../on-change/on-change.component"

@Component({
  selector: 'app-on-change-parent',
  templateUrl: './on-change-parent.component.html',
  styleUrls: ['./on-change-parent.component.css']
})
export class OnChangeParentComponent implements OnInit {
  hero: Hero
  power: string
  title = 'OnChanges'
  @ViewChild(OnChangeComponent) childView: OnChangeComponent
  constructor() {
    this.reset()
  }

  ngOnInit() {
  }
  reset(){
    this.hero = new Hero('WindStorm')
    this.power = 'sing'
    if (this.childView) {
      this.childView.reset()
    }
  }
}
