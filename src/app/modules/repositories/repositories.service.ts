import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject, Observable, takeUntil, tap } from 'rxjs';
import { GET_REPOSITORIES } from 'src/app/grapql.operations';
import { ApiTokenEntryService } from '../api-token-entry/api-token-entry.service';
import { ApolloQueryResult } from '@apollo/client/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RepositoriesService {
  private _repositoriesResponse: BehaviorSubject<any> =
    new BehaviorSubject<any>(null);

  get repositoriesResponse$() {
    return this._repositoriesResponse.asObservable();
  }
  constructor(
    private _apollo: Apollo,
    private _apiTokenEntryService: ApiTokenEntryService,
    
  ) {}

  getRepositories(
    first: number | null,
    last?: number | null,
    before?: string | null,
    after?: string | null
  ): Observable<ApolloQueryResult<any>> {
    console.log("first-",first, "last-",last, "before-",before , "after-", after);

    return this._apollo
      .watchQuery({
        fetchPolicy:'no-cache',
        query: GET_REPOSITORIES,
        variables: {
          first: first,
          last: last,
          before: before,
          after: after,
        },
      })
      .valueChanges.pipe(
        tap((res) => {
          if (res) {
            console.log(res);

            this._repositoriesResponse.next(res.data.search);
           
          }
        })
      );
  }
}
