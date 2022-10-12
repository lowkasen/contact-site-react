import { useAuthenticator } from "@aws-amplify/ui-react";
import Button from "@cloudscape-design/components/button";

export default function Signout() {
  const { authStatus, signOut } = useAuthenticator((context) => [
    context.authStatus,
  ]);

  return authStatus === "authenticated" ? (
    <>
      <Button onClick={signOut}>Signing out...</Button>
      {signOut()}
    </>
  ) : (
    <>Not logged in. Please login to continue.</>
  );
}
