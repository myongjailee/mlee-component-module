import { Component, OnInit } from '@angular/core';
import { MLEE_TEMPLATE } from './mlee.template';
import { MLEE_STYLE } from './mlee.style';

@Component({
  selector: 'app-mlee',
  template: MLEE_TEMPLATE,
  styles: [MLEE_STYLE]
})
export class MleeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
