// https://developer.okta.com/authentication-guide/implementing-authentication/implicit
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  oktaURL =
    'https://dev-880631.oktapreview.com/oauth2/default/v1/authorize?client_id=0oaj57k4fb1ZGTGWC0h7&response_type=token&scope=openid&redirect_uri=http://localhost:4200&state=state-f409448f-7fc0-4f97-8aae-93cfae23be77&nonce=foobar';
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
}
