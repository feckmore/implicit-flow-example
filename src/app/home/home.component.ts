// https://developer.okta.com/authentication-guide/implementing-authentication/implicit
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';

import OktaConfig from '../.env.config';

const baseURL = OktaConfig.oidc.domain;
const clientID = OktaConfig.oidc.clientId;
const redirectURI = 'http://localhost:4200';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  state = 'state-' + this.poorMansGUID();

  oktaURL: string =
    baseURL +
    '/oauth2/default/v1/authorize?client_id=' +
    clientID +
    '&response_type=token&scope=openid&redirect_uri=' +
    redirectURI +
    '&state=' +
    this.state +
    '&nonce=foobar';
  token: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  showRoute() {
    const fragment = this.route.snapshot.fragment;
    const params =
      fragment && fragment.split('&').length > 0
        ? fragment.split('&')[0]
        : null;
    this.token =
      params && params.split('=').length > 1
        ? params.split('=')[1].toString()
        : '';

    // TODO: Send random GUID to Okta in state parameter, then compare with returned state

    // TODO: Store token

    // TODO: validate token through Okta

    // TODO: Logout button & functionality

    // TODO: Get profile for token
  }

  poorMansGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
