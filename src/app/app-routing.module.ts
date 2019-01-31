import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';

import OktaConfig from './.env.config';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const config = {
  issuer: OktaConfig.oidc.issuer,
  redirectUri: OktaConfig.oidc.redirectUri,
  clientId: OktaConfig.oidc.clientId
};

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'implicit/callback', component: OktaCallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), OktaAuthModule.initAuth(config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
