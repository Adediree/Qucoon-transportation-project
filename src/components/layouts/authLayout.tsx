"use client";

import "./layout.css"
import Header, {HeaderProps} from "@/components/ui/menu/Header";
import {Typography} from "qore-components";

export type AuthLayoutProps = {
    headerProps?: HeaderProps;
    title: string;
    subtitle?: string;
    mainContainerProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
const AuthLayout = ({children, headerProps, title, subtitle, mainContainerProps, ...props}: AuthLayoutProps) => {
    return (
        <div className={"auth-container"} style={{height: "100vh"}}  {...props}>
            <Header type={headerProps?.type}/>
            <main {...mainContainerProps}
                  className={`authLayout-main-container`}>
                <div className={"authLayout-title-container"}>
                    <Typography size={"xl"}>{title}</Typography>
                    {subtitle &&
                        (<Typography size={"sm"} className={"bodyText"}>
                            {subtitle}
                        </Typography>)
                    }
                </div>
                {children}
            </main>
        </div>
    )
}

export default AuthLayout
