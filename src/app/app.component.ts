import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotify';
  username:string=""
  quoteBody:string=""
  postQuote(username:string ,quoteBody:string){
    console.log(username)
    console.log(quoteBody)
  }


  // downvotes:number=0;
  // upvotes:number=0;

  // clickCounter(){
  //   this.upvotes ++;
    
  // }
  // clickCounter2(){
  //   this.downvotes++;
  // }
}
