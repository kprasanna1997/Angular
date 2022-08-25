import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ManualComponent } from './manual/manual.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { ElseDirective } from './directives/else.directive';
import { GamecontrolComponent } from './communications/gamecontrol/gamecontrol.component';
import { OddComponent } from './communications/odd/odd.component';
import { EvenComponent } from './communications/even/even.component';
import { AppHighlightDirective } from './directives/app-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ManualComponent,
    HighlightDirective,
    ElseDirective,
    GamecontrolComponent,
    OddComponent,
    EvenComponent,
    AppHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
