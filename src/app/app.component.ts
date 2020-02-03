import { Component } from '@angular/core';
import { MyLibraryService } from 'my-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-library-lib';

  constructor(private myLibraryService: MyLibraryService) { }

  public onClickFunction($event: any): void {
    this.myLibraryService.setValue('Button Clicked');
  }
}
