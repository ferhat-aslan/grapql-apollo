import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiTokenEntryService {
  private _apiToken: BehaviorSubject<string> = new BehaviorSubject<string>('');
  
  get apiToken() {
    return this._apiToken.getValue();
  }

  constructor() {}

  //set token eğer token doğrusuyla beavioru subjectte tut. diğer sayfalarda kullanırsın

  public setApiToken(value: string): void {
    if (typeof value !== 'string') return;
    this._apiToken.next(value);
  }
}
