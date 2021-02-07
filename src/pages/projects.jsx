import clsx from "clsx";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ProjectsPage = () => {
  const { spesenAppScreenshot } = useStaticQuery(
    graphql`
      query ProjectsPageQuery {
        spesenAppScreenshot: file(relativePath: { eq: "spesen_app.png" }) {
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
      <SEO title="Projects" />
      <div className={clsx("p-12", "mb-32", "max-w-screen-xl", "mx-auto")}>
        <h1 className={clsx("font-title", "text-5xl", "md:text-6xl", "mb-4")}>
          Projects
        </h1>
        <p className={clsx("text-gray-400")}>
          Take a look at some projects built by Jenyus to see what we're all
          about.
        </p>
      </div>
      <article
        className={clsx(
          "flex",
          "flex-wrap",
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
            "p-6",
            "justify-center",
            "items-center",
            "bg-gradient-to-br",
            "from-blue-700",
            "to-red-400",
          )}>
          <Img
            className={clsx("h-full", "md:h-3/4", "w-full")}
            imgStyle={{ objectFit: "contain" }}
            fluid={spesenAppScreenshot?.childImageSharp.fluid}
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
            "md:p-16",
          )}>
          <h2 className={clsx("text-2xl")}>Spesen App</h2>
          <br />
          <p>
            Spesen App is a web app custom-built for the alte Kanti Aarau. By
            leveraging the capabilities of modern single-page apps, and NodeJS
            based webservers, teachers can make requests for vacation and
            compensation through a mobile accessible website and view their
            grants as well as other history directly using their active
            directory logins.
          </p>
        </div>
      </article>
    </Layout>
  );
};

export default ProjectsPage;
