import { Outlet } from "react-router-dom";
import PageContainer from "./PageContainer";

export const DashboardLayout = () => {
  return (
    <PageContainer>
      <Outlet />
    </PageContainer>
  );
};
