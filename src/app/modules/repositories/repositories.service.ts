import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject, Observable, takeUntil, tap } from 'rxjs';
import { GET_REPOSITORIES } from 'src/app/grapql.operations';
import { ApiTokenEntryService } from '../api-token-entry/api-token-entry.service';
import { ApolloQueryResult } from '@apollo/client/core';
import { Router } from '@angular/router';
import { SearchRepositoriesResponse } from 'src/app/models/repository';

@Injectable({
  providedIn: 'root',
})
export class RepositoriesService {
  private _repositoriesResponse: BehaviorSubject<SearchRepositoriesResponse | null> =
    new BehaviorSubject<SearchRepositoriesResponse | null>(null);

  get repositoriesResponse$() {
    return this._repositoriesResponse.asObservable();
  }
  constructor(private _apollo: Apollo) {}

  getRepositories(
    first: number | null,
    last?: number | null,
    before?: string | null,
    after?: string | null
  ): Observable<ApolloQueryResult<any>> {
    return this._apollo
      .watchQuery({
        fetchPolicy: 'no-cache',
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
            this._repositoriesResponse.next(res);
          }
        })
      );
  }
}
