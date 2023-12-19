import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingService } from './services/loading.service';
import { Subject, delay, takeUntil, tap } from 'rxjs';
import { Subscription } from 'apollo-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy, OnInit {
  public isLoading: boolean = true;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private _loadingService: LoadingService) {}

  ngOnInit(): void {
    this._loadingService.isLoading$
      .pipe(
        delay(0),
        takeUntil(this._unsubscribeAll),
        tap((res) => {
          this.isLoading = res;
        })
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this._unsubscribeAll.next(1);
    this._unsubscribeAll.complete();
  }
}
