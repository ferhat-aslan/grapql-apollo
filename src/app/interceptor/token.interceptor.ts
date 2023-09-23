import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { ApiTokenEntryService } from '../modules/api-token-entry/api-token-entry.service';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private _apiTokenEntry: ApiTokenEntryService,
    private _loadingService: LoadingService
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._loadingService.setIsLoading(true);
    const token = this._apiTokenEntry.apiToken;
    console.log(token);
    
    if (token) {
      // If we have a token, we set it to the header
      request = request.clone({
        setHeaders: { Authorization: token ? `Bearer ${token}` : '' },
      });
    }

    return next
      .handle(request)
      .pipe(
        catchError((err) => {
          this._loadingService.setIsLoading(false);
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
            
              
              this._loadingService.setError(err.error.message)
              
            }
          }
         return err;
        })
      )
      .pipe(
        tap((res: any) => {
          if (res.status) {
            this._loadingService.setError('')
            this._loadingService.setIsLoading(false);
          }
        })
      );
  }
}
