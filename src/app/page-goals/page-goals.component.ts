import { Component, OnInit } from '@angular/core';

import { goals } from '../goals';

@Component({
  selector: 'app-page-goals',
  templateUrl: './page-goals.component.html',
  styleUrls: ['./page-goals.component.css']
})
export class PageGoalsComponent implements OnInit {
  goals = goals;
  
  constructor() { }

  ngOnInit(): void {

  }

}
