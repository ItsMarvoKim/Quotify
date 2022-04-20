import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteComponent } from './vote/vote.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { DeleteQuoteComponent } from './delete-quote/delete-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    QuoteFormComponent,
    DeleteQuoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
