import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyLibraryModule, MyLibraryService } from '@mynamespace/my-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyLibraryModule
  ],
  providers: [
    MyLibraryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
