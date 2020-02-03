import { NgModule } from '@angular/core';

import { MyLibraryComponent } from './my-library.component';
import { MyLibraryService } from './my-library.service';

@NgModule({
  declarations: [
    MyLibraryComponent
  ],
  imports: [
  ],
  exports: [
    MyLibraryComponent
  ],
  providers: [
    MyLibraryService
  ]
})
export class MyLibraryModule { }
