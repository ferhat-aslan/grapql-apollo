import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, takeUntil, tap } from 'rxjs';
import { ReposResponse } from 'src/app/models/repository';
import { RepositoriesService } from './repositories.service';
import { PageInfo } from 'src/app/models/pageInfo';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],

})
export class RepositoriesComponent implements OnDestroy, AfterViewInit,OnInit {
  public pageInfo!: PageInfo;

  public pageSize: number = 10;

  public repos: ReposResponse[] = [];

  public isLoading: boolean = false;

  private _unsubscribeAll: ReplaySubject<any> = new ReplaySubject<any>();

  constructor(private _repositoriesService: RepositoriesService, private  _cd: ChangeDetectorRef) {
    this._repositoriesService.repositoriesResponse$
      .pipe(
        takeUntil(this._unsubscribeAll),
        tap((res) => {
         
          this.pageInfo = res?.data.search.pageInfo as PageInfo;
          const repos =res?.data.search.repos as ReposResponse[]
          this.repos = repos;
          console.log(repos);
          
        
          
          
        })
      )
      .subscribe();
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(1);
    this._unsubscribeAll.complete();
  }


  @HostListener("window:scroll", ["$event"])
onWindowScroll() {

if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight) {
 
  if(!this.isLoading){
    this.nextPage();
  }
}


}

  onPageSizeChanged(event: any): void {
    this.isLoading = true;

    this.pageSize = Number(event.target.value);
    this._repositoriesService
      .getRepositories(this.pageSize, null, null, null)
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
    this._repositoriesService
      .getRepositories(null, this.pageSize, this.pageInfo.startCursor)
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
      .getRepositories(this.pageSize, null, null, this.pageInfo.endCursor)
      .subscribe({
        next: (_res) => {
          this.isLoading = false;
        },
        error: (_err) => {
          this.isLoading = false;
        },
      });
  }
  log(e:any):void{
console.log(e);
  }
 
}
