/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
  aws_project_region: "ap-southeast-1",

  // AppSync settings
  // aws_appsync_graphqlEndpoint:
  // aws_appsync_region: "ap-southeast-1",
  // aws_appsync_authenticationType: "API_KEY",
  // aws_appsync_apiKey: process.env.REACT_APP_APPSYNC_API_KEY,

  // Cognito settings
  aws_cognito_region: "ap-southeast-1",
  aws_user_pools_id: process.env.REACT_APP_aws_user_pools_id,
  aws_user_pools_web_client_id:
    process.env.REACT_APP_aws_user_pools_web_client_id,
  oauth: {
    domain: process.env.REACT_APP_oauth_domain,
    scope: ["email", "openid"],
    redirectSignIn: process.env.REACT_APP_redirecturl_signin,
    redirectSignOut: process.env.REACT_APP_redirecturl_signout,
    responseType: "token",
  },
  // federationTarget: "COGNITO_USER_POOLS",
  // aws_cognito_username_attributes: [],
  // aws_cognito_social_providers: [],
  // aws_cognito_signup_attributes: ["EMAIL"],
  // aws_cognito_mfa_configuration: "OFF",
  // aws_cognito_mfa_types: [],
  // aws_cognito_password_protection_settings: {
  //   passwordPolicyMinLength: 8,
  //   passwordPolicyCharacters: [
  //     "REQUIRES_LOWERCASE",
  //     "REQUIRES_UPPERCASE",
  //     "REQUIRES_NUMBERS",
  //     "REQUIRES_SYMBOLS",
  //   ],
  // },
  // aws_cognito_verification_mechanisms: ["EMAIL"],
};

export default awsmobile;