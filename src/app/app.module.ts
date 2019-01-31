import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddFormComponent } from './components/add-form/add-form.component';
import { BudjetSummaryComponent } from './components/budjet-summary/budjet-summary.component';
import { BudjetItemsComponent } from './components/budjet-items/budjet-items.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    BudjetSummaryComponent,
    BudjetItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
