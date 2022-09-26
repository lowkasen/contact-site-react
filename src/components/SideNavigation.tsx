import * as React from "react";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import Badge from "@cloudscape-design/components/badge";

export default () => {
  const [activeHref, setActiveHref] = React.useState("#/page1");
  return (
    <SideNavigation
      activeHref={activeHref}
      header={{ href: "/", text: "Service name" }}
      onFollow={(event) => {
        if (!event.detail.external) {
          // event.preventDefault();
          setActiveHref(event.detail.href);
        }
      }}
      items={[
        { type: "link", text: "Protected1", href: "/protectedone" },
        { type: "link", text: "Protected2", href: "/protectedtwo" },
        { type: "link", text: "Protected3", href: "/protectedthree" },
        { type: "link", text: "Unprotected4", href: "/unprotectedfour" },
        { type: "divider" },
        { type: "link", text: "Login", href: "/login" },
      ]}
    />
  );
};
