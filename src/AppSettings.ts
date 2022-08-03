export const server =
  process.env.REACT_APP_ENV === 'production'
    ? 'https://qanda2022.azurewebsites.net'
    : process.env.REACT_APP_ENV === 'staging'
    ? 'https://qandasaging20220801225843.azurewebsites.net'
    : 'https://localhost:7047';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev-bjr0vsl8.us.auth0.com',
  client_id: 'HSByx9DcHeONHjchPwBhycAnTk9bhHGw',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
