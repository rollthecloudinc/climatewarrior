import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { DefaultDataServiceConfig } from "@ngrx/data";
import { AuthFacade } from "@rollthecloudinc/auth";
import { catchError, of, tap } from "rxjs";
import * as uuid from 'uuid';

@Component({
  selector: 'vertigoapp-github-callback',
  templateUrl: './github-callback.component.html'
})
export class GithubCallbackComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private defaultDataServiceConfig: DefaultDataServiceConfig,
    private authFacade: AuthFacade
  ) {

  }

  ngOnInit() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    const body = {
      client_id: '',
      client_secret: '',
      code,
      //redirect_uri: 'http://localhost:4000/github-callback2',
      state
    };
    const siteIndex = this.defaultDataServiceConfig.root.indexOf('/vertigoapp');
    const api = this.defaultDataServiceConfig.root.substring(0, siteIndex);
    console.log('api post', api);
    this.http.post(`${api}/github/login/oauth/access_token`, body, { responseType: 'text' }).pipe(
      catchError(e => {
        console.log('github error', e);
        return of({});
      }),
      tap(res => {
        console.log('github response', res);
        const authParams = new URLSearchParams(res);
        // console.log('access_token', authParams.get('access_token'));
        // console.log('refresh_token', authParams.get('refresh_token'));
        const oauth = {
          accessToken: authParams.get('access_token'),
          refreshToken: authParams.get('refresh_token')
        };
        localStorage.setItem('github.access_token', authParams.get('access_token'));
        localStorage.setItem('github.refresh_token', authParams.get('refresh_token'));
      }),
      tap(() => this.authFacade.login())
    ).subscribe();
  }

}