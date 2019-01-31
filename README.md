# ImplicitFlowExample

In the `app` folder, create a file named `.env.config.ts`

The file should contain your Okta domain & client info information:

```
export default {
  oidc: {
    clientId: '012357abcdefghi',
    domain: 'https://dev-012345.oktapreview.com',
    issuer: 'https://dev-012345.oktapreview.com/oauth2/default',
    redirectUri: 'http://localhost:4200/implicit/callback',
    scope: 'openid profile email'
  }
};
```
