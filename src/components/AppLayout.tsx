import AppLayout from "@cloudscape-design/components/app-layout";
import { Outlet } from "react-router-dom";
import SideNavigation from "./SideNavigation";
import ToolsPanel from "./ToolsPanel";

export default function () {
  return (
    <>
      <AppLayout
        navigation={<SideNavigation />}
        tools={<ToolsPanel />}
        content={<Outlet />}
      ></AppLayout>
    </>
  );
}
