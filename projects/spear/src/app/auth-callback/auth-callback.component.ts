import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

import { AuthFacade } from '@rollthecloudinc/auth';

@Component({
  selector: 'vertigoapp-auth-callback',
  templateUrl: './auth-callback.component.html',
  // styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {

  error: boolean;

  constructor(private authFacade: AuthFacade, private router: Router, private route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: Object) {}

  async ngOnInit() {

    // check for error
    /*if (this.route.snapshot.fragment.indexOf('error') >= 0) {
       this.error=true;
       return;
     }*/

    //if(isPlatformBrowser(this.platformId)) {
      this.authFacade.completeAuthentication();

      if (localStorage.getItem('github.access_token') && localStorage.getItem('github.refresh_token')) {
        const oauth = {
          accessToken: localStorage.getItem('github.access_token'),
          refreshToken: localStorage.getItem('github.refresh_token')
        };
        console.log('link oauth', oauth);
      }

      this.router.navigate(['/pages/create-panel-page'], { queryParams: { cacheBuster: uuidv4() }});
    //}

  }

}
