import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiTokenEntryService } from 'src/app/modules/api-token-entry/api-token-entry.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent {

  constructor(private _router: Router, private _apiTokenEntryService: ApiTokenEntryService){}
  changeToken(): void {
    this._apiTokenEntryService.setApiToken('');
    this._router.navigate(['/'])
  }
}
