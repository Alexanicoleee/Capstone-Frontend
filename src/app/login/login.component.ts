import { filter, Subject, take, takeUntil } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy, OnInit {
  public loginValid = true;
  public username = '';
  public password = '';
  router: ActivatedRoute;

  private _destroySub$ = new Subject<void>();
  //private readonly returnUrl: string;

  constructor(route: ActivatedRoute) {
    this.router = route;
    //this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/game';
  }

  public ngOnDestroy(): void {
    this._destroySub$.next();
  }

  public onSubmit(): void {
    this.loginValid = true;
  }
  
  ngOnInit(): void {
  }
}
