import { Component, OnDestroy, OnInit } from '@angular/core';
import { RepositoryDetailService } from './repository-detail.service';
import { Subject, takeUntil, tap } from 'rxjs';
import { PageInfo } from 'src/app/models/pageInfo';
import { ActivatedRoute } from '@angular/router';
import { Owner, Repository } from 'src/app/models/repository';
import { IssueEdge, IssueNode } from 'src/app/models/issue';

@Component({
  selector: 'app-repository-detail',
  templateUrl: './repository-detail.component.html',
  styleUrls: ['./repository-detail.component.scss'],
})
export class RepositoryDetailComponent implements OnDestroy, OnInit {
  public issues!: any[];

  public repositoryInfo!:Repository;

  public owner!: Owner;

  public pageInfo!: PageInfo;

  public pageSize: number = 10;

  public isLoading: boolean = false;

  private _unSubscribe: Subject<any> = new Subject<any>();

  constructor(
    private _repositoryDetailService: RepositoryDetailService,
    private _activatedRoute: ActivatedRoute
  ) {
   
    
  }
  ngOnInit(): void {
    this._repositoryDetailService.repositoryDetail$
      .pipe(
        takeUntil(this._unSubscribe),
        tap((res) => {
          if (res) {
            console.log(res);
            
            this.repositoryInfo = res.data?.repository as any;
            this.issues = res.data?.repository.issues?.edges as IssueEdge[];
            this.pageInfo = res.data?.repository.issues?.pageInfo as PageInfo;
            this.owner = res.data?.repository?.owner as Owner;
          }
        })
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this._unSubscribe.next(1);
    this._unSubscribe.complete();
  }
  onPageSizeChanged(event: any): void {
    this.isLoading = true;
   

    this.pageSize = Number(event.target.value);
    this._repositoryDetailService
      .getRepositoryDetail(
        this._activatedRoute.snapshot.params['repositoryOwner'],
        this._activatedRoute.snapshot.params['repository'],
        this.pageSize,
        null,
        null,
        null
      )
      .subscribe({
        next: (_res) => {
          this.isLoading = false;
        },
        error: (_err) => {
          this.isLoading = false;
        },
      });
  }

  prevPage(): void {
    this.isLoading = true;
    this._repositoryDetailService
      .getRepositoryDetail(
        this._activatedRoute.snapshot.params['repositoryOwner'],
        this._activatedRoute.snapshot.params['repository'],
        null,
        this.pageSize,
        this.pageInfo.startCursor
      )
      .subscribe({
        next: (_res) => {
          this.isLoading = false;
        },
        error: (_err) => {
          this.isLoading = false;
        },
      });
  }

  nextPage(): void {
    this.isLoading = true;
    this._repositoryDetailService
      .getRepositoryDetail(
        this._activatedRoute.snapshot.params['repositoryOwner'],
        this._activatedRoute.snapshot.params['repository'],
        this.pageSize,
        null,
        null,
        this.pageInfo.endCursor
      )
      .subscribe({
        next: (_res) => {
          this.isLoading = false;
        },
        error: (_err) => {
          this.isLoading = false;
        },
      });
  }
}
