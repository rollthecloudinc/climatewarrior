import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthCallbackComponent } from "./auth-callback/auth-callback.component";
import { GithubCallbackComponent } from "./components/github-callback/github-callback.component";

const routes = [
  { path: 'github-callback', component: GithubCallbackComponent },
  { path: 'auth-callback', component: AuthCallbackComponent },
];

@NgModule({
  declarations: [ 
    GithubCallbackComponent,
    AuthCallbackComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class DruidModule {}