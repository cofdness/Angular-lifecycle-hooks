import { Component, OnInit } from '@angular/core';
import {LoggerService} from "../../services/logger.service"

@Component({
  selector: 'app-peek-a-boo',
  templateUrl: './peek-a-boo.component.html',
  styleUrls: ['./peek-a-boo.component.css']
})
export class PeekABooComponent implements OnInit {

  constructor(
    private loggerService: LoggerService
  ) { }

  ngOnInit() {
  }

}
