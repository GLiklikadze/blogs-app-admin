import { Outlet } from "react-router-dom";
import PageContainer from "./PageContainer";

export const RootLayout = () => {
  return (
    <PageContainer>
      <Outlet />
    </PageContainer>
  );
};
