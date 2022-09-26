import Button from "@cloudscape-design/components/button";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";

export default function Login() {
  const { authStatus, toFederatedSignIn } = useAuthenticator((context) => [
    context.authStatus,
  ]);
  return authStatus === "authenticated" ? (
    <>Already Logged In.</>
  ) : (
    <>
      {/* <Button
        onClick={() => {
          Auth.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Google,
          });
        }}
      >
        Login to continue
      </Button> */}
      {Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Google,
      })}
    </>
  );
}
