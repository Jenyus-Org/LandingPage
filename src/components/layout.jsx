import clsx from "clsx";
import { Link } from "gatsby";
import * as React from "react";
import JenyusLogo from "../assets/jenyus.inline.svg";

const Layout = ({ children }) => (
  <React.Fragment>
    <main>{children}</main>
    <footer className={clsx("bg-gray-900", "text-white")}>
      <div
        className={clsx(
          "py-8",
          "px-12",
          "flex",
          "justify-between",
          "max-w-screen-lg",
          "mx-auto",
        )}>
        <JenyusLogo className={clsx("h-36", "w-auto")} />
        <div className={clsx("pt-4")}>
          <p className={clsx("font-title", "uppercase")}>About</p>
          <ul>
            <li>
              <Link to="/projects" className={clsx("hover:underline")}>
                Projects
              </Link>
            </li>

            <li>
              <Link to="/about-us" className={clsx("hover:underline")}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/faq" className={clsx("hover:underline")}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className={clsx("pt-4")}>
          <p className={clsx("font-title", "uppercase")}>Contact Us</p>
          <a
            href="mailto:jenyusorg@gmail.com"
            className={clsx("hover:underline")}>
            jenyusorg@gmail.com
          </a>
        </div>
        <div className={clsx("pt-4")}>
          <span>&#169; 2021, Jenyus Org</span>
        </div>
      </div>
    </footer>
  </React.Fragment>
);

export default Layout;
