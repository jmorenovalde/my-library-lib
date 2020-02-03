import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MyLibraryService } from './my-library.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'myprefix-my-library',
  templateUrl: 'my-library.component.html',
  styles: []
})
export class MyLibraryComponent implements OnInit, OnDestroy {

  @Input() dataIn = '';

  private _serviceIn = '';
  public get serviceIn() { return this._serviceIn; }

  private _subscritions$: Subject<void> = new Subject<void>();

  constructor(private myLibraryService: MyLibraryService) { }

  ngOnInit() {
    // Take the value from the service in the _serviceIn variable.
    this.myLibraryService.valueChanged$
      .pipe(takeUntil(this._subscritions$))
      .subscribe((value: string) => {
        this._serviceIn = value;
      });
  }

  ngOnDestroy() {
    // Destroy the subscriptions.
    this._subscritions$.next();
    this._subscritions$.complete();
  }
}
