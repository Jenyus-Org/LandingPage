/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "firebase/analytics";

import "./src/styles/global.css";
import "fontsource-russo-one";
import "fontsource-maven-pro";

if (process.env.NODE_ENV === "development") {
  require("./src/styles/tailwind.css");
} else {
  require("./static/styles/tailwind.css");
}
