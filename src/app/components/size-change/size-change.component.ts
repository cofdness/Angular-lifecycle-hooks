import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-size-change',
  templateUrl: './size-change.component.html',
  styleUrls: ['./size-change.component.css']
})
export class SizeChangeComponent implements OnInit {
  @Input() size: number | string

    //event name = sizeChange, so that two way binding [(size)] can detect the change and propagate
  @Output() sizeChange = new EventEmitter<number>()
  @Output() doubleSizeChange = new EventEmitter<number>()
  constructor() { }

  ngOnInit() {
  }
  increase(){
    this.resize(+1)
  }
  decrease(){
    this.resize(-1)
  }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta))

    // this.doubleSizeChange.emit(this.size*2)
    this.sizeChange.emit(this.size)
  }

}
