import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyLibraryService {

  private _valueSubject: Subject<string> = new Subject<string>();
  public valueChanged$ = this._valueSubject.asObservable();

  constructor() { }

  public setValue(value: string): void {
    this._valueSubject.next(value);
  }
}
