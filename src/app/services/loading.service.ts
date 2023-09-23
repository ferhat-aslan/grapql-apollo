import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _isloading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private _hasError:BehaviorSubject<string> = new BehaviorSubject<string>('');
  get isLoading$(): Observable<boolean> {
    return this._isloading.asObservable();
  }
  get hasError$(): Observable<string>{
    return this._hasError.asObservable()
  }
  constructor() {}
  setIsLoading(value: boolean): void {
    this._isloading.next(value);
  }
  setError(value: string): void {
    this._hasError.next(value);
  }
}
