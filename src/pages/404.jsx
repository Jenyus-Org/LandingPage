import clsx from "clsx";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => {
  const { laptopImg } = useStaticQuery(
    graphql`
      query NotFoundPageQuery {
        laptopImg: file(relativePath: { eq: "laptop_splash.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 2560) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `,
  );

  return (
    <Layout>
      <SEO title="Not found" />
      <section
        className={clsx(
          "flex",
          "items-stretch",
          "h-screen",
          "justify-between",
          "flex-col",
          "md:flex-row",
        )}>
        <div
          className={clsx(
            "flex-1",
            "flex",
            "justify-center",
            "items-center",
            "overflow-hidden",
          )}>
          <Img
            className={clsx("min-w-full", "min-h-full", "flex-shrink-0")}
            fluid={laptopImg?.childImageSharp.fluid}
          />
        </div>
        <div
          className={clsx(
            "flex-1",
            "flex",
            "flex-col",
            "items-center",
            "justify-center",
            "p-8",
          )}>
          <div>
            <h1 className={clsx("mb-4", "text-5xl", "md:text-6xl")}>
              Page not found
            </h1>
            <p>
              The page you were looking for has either been moved or does not
              exist anymore.
              <br />
              {process.env.NODE_ENV === "development" ? (
                <>
                  <br />
                  Try creating a page in <code>src/pages/</code>.
                  <br />
                </>
              ) : null}
              <br />
              <div className={clsx("text-center", "block")}>
                <Link
                  className={clsx(
                    "px-12",
                    "py-6",
                    "rounded-full",
                    "inline-block",
                    "bg-gradient-to-br",
                    "from-blue-700",
                    "to-red-400",
                    "transition-shadow",
                    "duration-200",
                    "ease-in-out",
                    "hover:shadow-xl",
                    "ring-4",
                    "ring-transparent",
                    "hover:ring-gray-200",
                    "text-white",
                    "font-bold",
                  )}
                  to="/">
                  Return to Home
                </Link>
              </div>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
