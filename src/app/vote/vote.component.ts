import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  downvotes:number=0;
  upvotes:number=0;

  clickCounter(){
    this.upvotes ++;
    
  }
  clickCounter2(){
    this.downvotes++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
