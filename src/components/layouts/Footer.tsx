import "./Footer.css";
import { BaseButton } from "qucoon-components";

export default function Footer() {
  return (
    <footer className="overall-footer-container">
      <div className="footer-container">
        <p className="footer-text">Qucoon Metro</p>
        <div className="options">
          <BaseButton
            text="Home"
            textStyle={{ color: "white" }}
            style={{ background: "none" }}
          />
          <BaseButton
            text="Routes"
            textStyle={{ color: "white" }}
            style={{ background: "none" }}
          />
          <BaseButton
            text="Contact"
            textStyle={{ color: "white" }}
            style={{ background: "none" }}
          />
        </div>
        <p className="footer-text">Socials</p>
      </div>

      <div className="bottom-div">
        <p className="copyright-text">
          Qucoon Metro. All rights reserved. © 2025
        </p>
      </div>
    </footer>
  );
}
