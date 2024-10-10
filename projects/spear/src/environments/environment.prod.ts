// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// https://cognito-idp.{region}.amazonaws.com/{userPoolId}/.well-known/jwks.json.

const signingKeys = {"keys":[{"alg":"RS256","e":"AQAB","kid":"d41dkKfuBCszyYg1SQLu3w0bcXe9/CChhHisJ+6T2+E=","kty":"RSA","n":"yhB5xFjGfceNwFVnnCNOmIsl2mNIVEU6QUwpsUqtvxsA0gVzS4gRj0_qq5nLRNrfO9F287G-fllGaTJXkjEbj22bzpVsojg2bM5OIY4cGpjrfeWdG8CGYKsMmHTfgE55x0f9TT98gYTnotKwVbcSmu2y6bvLaSVAcCeohbUdVvH_eYHBAR6acABHYBUDY9tUF0fRv-tfsOaMmiZaCwTH9GPItGnea7SgdRGp_6aZPJ_X0g0e9ImnrfBPV16YBO21i-pWeknyg-2Rbs6wnosilv_2beTFX0T95eGIX_yeCT9MfpC0wmiukI705TFj1QjEeBuAtvrqzvj1DqwSXuHvpQ","use":"sig"},{"alg":"RS256","e":"AQAB","kid":"rWKl3yki4YK1v1C5Tj3Z6wzitwf/3QGBDHgnfWOr8Gk=","kty":"RSA","n":"vWFu4ToGvfNMQqc0kqtkPDBgA21WOt48AmOojV2W1N5lTB3qtcIIaLNGx0DM4sKvE5t83Xyq67hGp_ROlDwc8gCJYZkNnrl2FkYz6JHyUZvpokUblrhUbW02Q7dE5qD3VXwr9JidjxoMwcc5ZXKtQEldJAgaYSqXRzVsZHjFJ9yx_iJfzXZxfLvoRw16brbuVftQ3XQKIVxY3PFPc1mRfme-QInb9CrsVNe_I4FvCBD-VA1Cs3Mfo7eVG6wvg7SMLsbMUDf9I5VvzhgtJjheLjV9PhgvhPr2t5g6DCjhUd2SFJFJ62xCKM12TyWeQE_bq88UOdI0v0CQ0ikF1Xm2nQ","use":"sig"}]}

export const environment = {
  production: true,
  site: 'vertigoapp',
  apiGatewaySettings: {
    // endpointUrl: 'https://localhost:44340',
    endpointUrl: "https://uj9gd1wzt9.execute-api.us-east-1.amazonaws.com/rollthecloudinc/vertigoapp-objects-prod/shapeshifter"
  },
  mediaSettings: {
    endpointUrl: 'https://uj9gd1wzt9.execute-api.us-east-1.amazonaws.com/vertigoapp/media',
    cloudinaryUrl: 'https://api.cloudinary.com/v1_1/dj4vvkgzw',
    uploadPreset: 'i0hm4opm',
    imageUrl: 'https://uj9gd1wzt9.execute-api.us-east-1.amazonaws.com/vertigoapp',
    bucket: 'classifieds-ui-prod',
    prefix: 'media/'
  },
  adSettings: {
    adUrl: 'https://d2o66qxp1qwfb9.cloudfront.net/ads'
  },
  taxonomySettings: {
    vocabularyUrl: 'https://d2o66qxp1qwfb9.cloudfront.net/vocabularies'
  },
  profileSettings: {
    profileUrl: 'https://d2o66qxp1qwfb9.cloudfront.net/profiles'
  },
  loggingSettings: {
    endpointUrl: "https://classifieds-dev.azurewebsites.net/logging"
  },
  chatSettings: {
    endpointUrl: "https://classifieds-dev.azurewebsites.net/chat"
  },
  oktaSettings: {
    redirectUri: 'https://classifieds-ui.com/implicit/callback',
    clientId: '0oa4qw6inqps2eUgC4x6',
  },
  cognitoSettings: {
    identityPoolId: 'us-east-1:88a3314e-4f05-484d-a59c-6809a8a876d4',
    region: 'us-east-1',
    userPoolId: 'us-east-1_3mZuILnXX'
  },
  panelsSettings: {
    openSearchDomain: 'search-rtc-classifieds-prod-rtc-fbaee2gxt3iyo3h5nndiyiuvpi',
    s3Bucket: 'classifieds-ui-prod',
    objectsRootUrl: 'https://rollthecloudinc.github.io/vertigoapp-objects-prod'
  },
  alienaliasSettings: {
    openSearchDomain: ''
  },
  rumSettings: {
    appId: '',
    guestRoleArn: '',
    identityPoolId: '',
    region: ''
  },
  clientSettings: {
    authority: 'https://auth-prod-rtc.auth.us-east-1.amazoncognito.com',
    client_id: '1ho53ncqvtlakp3qd5t58cnbjk',
    redirect_uri: 'https://app.problemsolver.eco/auth-callback',
    silent_redirect_uri: 'https://app.problemsolver.eco/silent-refresh.html',
    //redirect_uri: 'http://localhost:4000/auth-callback',
    //silent_redirect_uri: 'https://localhost:4000/silent-refresh.html',
    response_type: "code",
    scope:"openid profile", /*'ads_api media_api chat IdentityServerApi taxonomy_api api_gateway",*/
    filterProtocolClaims: true,
    loadUserInfo: true,
    automaticSilentRenew: true,
    stateStore: undefined,
    userStore: undefined,
    metadata: {
      issuer: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_3mZuILnXX",
      authorization_endpoint: "https://auth-prod-rtc.auth.us-east-1.amazoncognito.com/oauth2/authorize",
      userinfo_endpoint: "https://auth-prod-rtc.auth.us-east-1.amazoncognito.com/oauth2/userInfo",
      end_session_endpoint: "https://auth-prod-rtc.auth.us-east-1.amazoncognito.com/logout",
      token_endpoint: "https://auth-prod-rtc.auth.us-east-1.amazoncognito.com/oauth2/token",
      jwks_uri: "https://auth-prod-rtc.auth.us-east-1.amazoncognito.com/us-east-1_3mZuILnXX"
    },
    signingKeys: signingKeys.keys
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
