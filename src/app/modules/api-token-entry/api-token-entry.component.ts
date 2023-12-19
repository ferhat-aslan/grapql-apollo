import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';

import { ApiTokenEntryService } from './api-token-entry.service';
import { Router } from '@angular/router';
import { RepositoriesService } from '../repositories/repositories.service';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { SafeResourceUrl } from '@angular/platform-browser';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-api-token-entry',
  templateUrl: './api-token-entry.component.html',
  styleUrls: ['./api-token-entry.component.scss'],
})
export class ApiTokenEntryComponent {
  public tokenFormGroup: UntypedFormGroup;

  public error!: Observable<string>;

  public isLoading: boolean = false;

  constructor(
    private _formBuilder: UntypedFormBuilder,
    private _apiTokenEntryService: ApiTokenEntryService,
    private _router: Router,
    private _repositoriesService: RepositoriesService,
    private _loadingService: LoadingService
  ) {
    this.error = this._loadingService.hasError$;

    this.tokenFormGroup = _formBuilder.group({
      token: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }

  public submitToken(): void {
    if (this.tokenFormGroup.invalid || this.isLoading) {
    
      return;
    }
    this.isLoading = true;
    const { token } = this.tokenFormGroup.value;

    this._apiTokenEntryService.setApiToken(token);

    this._repositoriesService.getRepositories(10, null).subscribe({
      next: (res) => {
        this.isLoading = false;
        this._router.navigate(['repositories']);
      },
      error: (err) => {
        this.isLoading = false;
        this._apiTokenEntryService.setApiToken('');
        console.log(err);
      },
    });
  }
}
