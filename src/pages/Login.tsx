import Button from "@cloudscape-design/components/button";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";

export default function Login() {
  const { route, toFederatedSignIn } = useAuthenticator((context) => [
    context.route,
  ]);
  return (
    <>
      <Button
        onClick={() => {
          toFederatedSignIn({ provider: "Facebook" });
        }}
      >
        Login to continue
      </Button>
      <Authenticator
        socialProviders={["amazon", "apple", "facebook", "google"]}
      ></Authenticator>
    </>
  );
}
