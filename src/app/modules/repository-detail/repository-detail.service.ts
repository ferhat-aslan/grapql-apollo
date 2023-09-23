import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { GET_REPO_DETAILS } from 'src/app/grapql.operations';
import { IssueResponse } from 'src/app/models/issue';

@Injectable({
  providedIn: 'root',
})
export class RepositoryDetailService {
  private _repositoryDetail: BehaviorSubject<IssueResponse | null> = new BehaviorSubject<IssueResponse |null>(null);

  get repositoryDetail$(){
    return this._repositoryDetail.asObservable();
  }
  constructor(private _apollo: Apollo) {}

  getRepositoryDetail(
    owner: string,
    name: string,
    first?:number | null,
    last?: number | null,
    before?: string | null,
    after?: string | null
  ): Observable<ApolloQueryResult<any>> {
    return this._apollo
      .watchQuery({
        fetchPolicy: 'no-cache',
        query: GET_REPO_DETAILS,
        variables: {
          owner: owner,
          name: name,
          first:first,
          last:last,
          before:before,
          after:after
        },
      })
      .valueChanges.pipe(
        tap((res) => {
          if (res) {
           this._repositoryDetail.next(res);
          }
        })
      );
  }
}
