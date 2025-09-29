"use client";

import "../ui/container/container.css";
import "./layout.css";
import Header, { HeaderProps } from "@/components/ui/menu/Header";
import { Typography } from "qucoon-components";
import Image from "next/image";
import { NavBar } from "./Navbar";

export type AuthLayoutProps = {
  headerProps?: HeaderProps;
  img?: string;
  title?: string;
  subtitle?: string;
  logo?: string;
  mainContainerProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
const AuthLayout = ({
  children,
  headerProps,
  img,
  title,
  subtitle,
  logo,
  mainContainerProps,
  ...props
}: AuthLayoutProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        // backgroundImage: 'url("/Password-Setup-Bg-pattern.svg")',
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "48px",
        backgroundColor: "black",
        height: "100%",
        // width: "100vw",
      }}
    >
      <nav
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          zIndex: "1000",
          width: "100v%",
          display: "flex",
          alignItems: "center",
          //   padding: "32px",
          //   paddingLeft: "72px",
        }}
      >
        <NavBar title="Ugrr.net" />
      </nav>
      <div className={"auth-container"} {...props}>
        <Header type={headerProps?.type} />
        <main {...mainContainerProps} className={`authLayout-main-container`}>
          <div className={"authLayout-title-container"}>
            {img && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                <Image src={img} alt="Logo" width={150} height={50} />
              </div>
            )}
            <Typography size={"xl"}>{title}</Typography>
            {subtitle && (
              <Typography size={"sm"} className={"bodyText"}>
                {subtitle}
              </Typography>
            )}
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
