import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTokenEntryComponent } from './api-token-entry.component';

describe('ApiTokenEntryComponent', () => {

  let component: ApiTokenEntryComponent;
  let fixture: ComponentFixture<ApiTokenEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiTokenEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiTokenEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
