export const server = 'https://localhost:7014';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev-bjr0vsl8.auth0.com',
  client_id: 'your-clientid',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
