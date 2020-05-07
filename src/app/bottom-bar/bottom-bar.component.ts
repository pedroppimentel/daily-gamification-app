import { Component, OnInit } from '@angular/core';
import { goals } from '../goals';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addGoal() {
    goals.push({name: "NAME ADDED WITH BUTTON", description: "DESC ADDED WITH BUTTON"});    
  }
}
