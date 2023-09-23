import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {
  BehaviorSubject,
  ReplaySubject,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { Repository } from 'src/app/models/repository';
import { RepositoriesService } from './repositories.service';
import { PageInfo } from 'src/app/models/pageInfo';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent implements AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator)
  public _matPaginator!: MatPaginator;
  public pageInfo!: PageInfo;
  public pageSize: number = 10;
  public repos: any[] = [];
  public isLoading: boolean = false;
  public repositories: any[] = [
    {
      name: 'First repo',
      image:
        'https://banner2.cleanpng.com/20180824/jtl/kisspng-computer-icons-logo-portable-network-graphics-clip-icons-for-free-iconza-circle-social-5b7fe46b0bac53.1999041115351082030478.jpg',
      owner: 'John Depo',
      starCount: 3,
    },
    {
      name: 'Second repo',
      image:
        'https://banner2.cleanpng.com/20180824/jtl/kisspng-computer-icons-logo-portable-network-graphics-clip-icons-for-free-iconza-circle-social-5b7fe46b0bac53.1999041115351082030478.jpg',
      owner: 'John Depo',
      starCount: 39,
    },
    {
      name: 'Last repo',
      image:
        'https://banner2.cleanpng.com/20180824/jtl/kisspng-computer-icons-logo-portable-network-graphics-clip-icons-for-free-iconza-circle-social-5b7fe46b0bac53.1999041115351082030478.jpg',
      owner: 'John Doe',
      starCount: 53,
    },
  ];
  private _unsubscribeAll: ReplaySubject<any> = new ReplaySubject<any>();
  constructor(private _repositoriesService: RepositoriesService) {
    this._repositoriesService.repositoriesResponse$
      .pipe(
        takeUntil(this._unsubscribeAll),
        tap((res) => {
          this.pageInfo = res.pageInfo;
          this.repos = res.repos;
          console.log(res);
        })
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this._unsubscribeAll.next(1);
    this._unsubscribeAll.complete();
  }

  ngAfterViewInit(): void {}
  onPageSizeChanged(event: any): void {
    this.isLoading = true;
    console.log(event.target.value);

    this.pageSize = Number(event.target.value);
    this._repositoriesService.getRepositories(this.pageSize,null,null,null).subscribe({
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
    this._repositoriesService
      .getRepositories(null,this.pageSize, this.pageInfo.startCursor)
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
    this._repositoriesService
      .getRepositories(this.pageSize,null,null, this.pageInfo.endCursor)
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
