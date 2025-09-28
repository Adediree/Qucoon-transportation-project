import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "qore-components/dist/style.css";
import "./globals.css";
import React from "react";
import { GlobalModalProvider, ReduxProvider } from "../components/custom/providers";
import { OtpProvider } from "../utilities/context/otpContext";
import BaseToastContainer from "@/components/ui/toast/BaseToastContainer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Base Project",
  description: "Skeleton bootstrap to build qucoon projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReduxProvider>
          <OtpProvider>
            <GlobalModalProvider>
              <BaseToastContainer />
              {children}
            </GlobalModalProvider>
          </OtpProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
