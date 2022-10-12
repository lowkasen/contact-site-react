import {
  Authenticator,
  useAuthenticator,
  VisuallyHidden,
} from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (authStatus === "authenticated") {
      navigate(from, { replace: true });
    } else if (authStatus === "unauthenticated") {
      Auth.federatedSignIn({ customProvider: "EmbedOKTA" });
    }
  }, [authStatus, navigate, from]);

  return (
    <>
      {authStatus === "authenticated" ? (
        <h1>Already logged in.</h1>
      ) : (
        <h1>Logging in...</h1>
      )}
      <VisuallyHidden>
        <Authenticator></Authenticator>
      </VisuallyHidden>
    </>
  );
}
