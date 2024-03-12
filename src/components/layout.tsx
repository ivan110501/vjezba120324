import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="layout">{children}</div>
      <div>Update</div>
    </>
  );
};

export default Layout;
