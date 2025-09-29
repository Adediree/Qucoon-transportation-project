"use client";
import { BaseSidebar } from "qucoon-components";
import { usePathname, useRouter } from "next/navigation";
import { NavBar } from "./Navbar";
import Footer from "./Footer";
// import "./globals.css";

export type DashboardLayoutProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
const DashboardLayout = ({ children, ...props }: DashboardLayoutProps) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // gap: "2px",
        justifyContent: "space-between",
        // paddingTop: "24px",
        // paddingBottom: "32px",
        // paddingLeft: "72px",
        // paddingRight: "72px",
        // backgroundColor: "black",
        minHeight: "100vh",
        // border: "4px solid aqua",
        // height: "max-content",
      }}
    >
      <NavBar title="Ugrr.net" />
      <main
        style={{
          // flex: "1 1 auto",
          // flex: 1,
          // minHeight: 0,
          // overflow: "auto",
          // border: "3px solid gold",
          overflow: "hidden",
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
