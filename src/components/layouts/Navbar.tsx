"use client";
import React, { useState } from "react";
import "./Navbar.css";
import { BaseButton } from "qucoon-components";
import { useRouter } from "next/navigation";
import { RouteConstant } from "@/utilities/constants/routeConstant";
import { Menu, X } from "lucide-react";

interface NavBarProps {
  logoSrc?: string;
  alt?: string;
  title?: string;
  onNavigate?: (path: string) => void;
}

export const NavBar: React.FC<NavBarProps> = ({
  logoSrc,
  alt,
  title,
  onNavigate,
}) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="nav-container">
      {title && (
        <div className="title-text">
          <p className="nav-title">{title}</p>
        </div>
      )}

      {/* Hamburger menu button (mobile only) */}
      <button
        className="hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X size={28} color="white" />
        ) : (
          <Menu size={28} color="white" />
        )}
      </button>

      {/* Regular desktop buttons */}
      <div className="button-container">
        <BaseButton
          text="Login"
          onClick={() => router.push(RouteConstant.auth.login.path)}
          textStyle={{ color: "white" }}
          style={{
            background: "none",
          }}
        />
        <BaseButton
          text="Sign up"
          onClick={() => router.push(RouteConstant.auth.signup.path)}
          textStyle={{ color: "white" }}
          style={{
            background: "none",
          }}
        />
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <BaseButton
            text="Login"
            onClick={() => {
              router.push(RouteConstant.auth.login.path);
              setIsMenuOpen(false);
            }}
            textStyle={{ color: "white" }}
            style={{
              background: "none",
            }}
          />
          <BaseButton
            text="Sign up"
            onClick={() => {
              router.push(RouteConstant.auth.signup.path);
              setIsMenuOpen(false);
            }}
            textStyle={{ color: "white" }}
            style={{
              background: "none",
            }}
          />
        </div>
      )}
    </div>
  );
};
