import clsx from "clsx";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import * as React from "react";
import AlteKantiAarauLogo from "../assets/alte_kanti_aarau_logo.inline.svg";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
  const { laptopImg, dominikImg, raviImg } = useStaticQuery(
    graphql`
      query IndexPageQuery {
        laptopImg: file(relativePath: { eq: "laptop_splash.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 2560) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        dominikImg: file(relativePath: { eq: "dominik.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 450) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        raviImg: file(relativePath: { eq: "ravi_2_1_cropped_1.png" }) {
          childImageSharp {
            fluid(maxHeight: 450) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `,
  );

  return (
    <Layout>
      <SEO title="Home" />
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
            <h1
              className={clsx("font-title", "text-5xl", "md:text-6xl", "mb-1")}>
              Jenyus Org
            </h1>
            <hr className={clsx("border-2", "border-black", "mb-2")} />
            <p className={clsx("font-title", "text-xl")}>Realising Ideas</p>
          </div>
        </div>
      </section>
      <section
        className={clsx("px-8", "pt-10", "max-w-screen-xl", "mx-auto", "mb-8")}>
        <h2 className={clsx("font-title", "text-4xl", "mb-2")}>
          About Jenyus Org
        </h2>
        <p className={clsx("mb-4")}>
          Jenyus Org is a software development firm based in Lucerne,
          Switzerland. The mission, to find, accelerate, and support talented,
          and innovative people.
          <br />
          <br />
          Founded in Aarau by two undergraduates of the computing college
          Aarau/Baden, the company aims to provide a transparent and involved
          approach to creating modern software.
          <br />
          <br />
          Need a landing page for yourself or your business? An internal
          management tool or do you have an innovative idea but not the means to
          build up on it?
        </p>
        <div className={clsx("text-center", "block")}>
          <a
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
            href="mailto:jenyusorg@gmail.com">
            Contact Us
          </a>
        </div>
      </section>
      <section
        className={clsx("px-8", "pt-4", "pb-8", "max-w-screen-xl", "mx-auto")}>
        <h2 className={clsx("font-title", "text-4xl", "mb-4")}>As Used By</h2>
        <div className={clsx("flex", "flex-wrap")}>
          <div className={clsx("p-4", "h-32")}>
            <AlteKantiAarauLogo className={clsx("h-full", "w-auto")} />
          </div>
        </div>
      </section>
      <section
        className={clsx("px-8", "pt-4", "pb-8", "max-w-screen-xl", "mx-auto")}>
        <h2 className={clsx("font-title", "text-4xl", "mb-4")}>
          Meet The Team
        </h2>
        <div className={clsx("grid", "grid-cols-1", "md:grid-cols-2", "gap-4")}>
          <div
            className={clsx(
              "flex",
              "flex-col",
              "rounded",
              "shadow",
              "py-4",
              "px-8",
              "items-center",
              "justify-between",
              "bg-blue-50",
            )}>
            <div
              className={clsx(
                "inline-block",
                "w-36",
                "h-36",
                "rounded-full",
                "overflow-hidden",
                "mb-4",
                "ring-4",
                "ring-blue-100",
              )}>
              <Img
                className={clsx("object-cover")}
                fluid={dominikImg?.childImageSharp.fluid}
              />
            </div>
            <div className={clsx("text-center", "mb-6")}>
              <span className={clsx("font-extrabold")}>Dominik</span>
              <br />
              <span>Berger</span>
            </div>
            <div className={clsx("w-full", "mb-4")}>
              <span className={clsx("text-2xl")}>Developer</span>
              <br />
              <span>CEO</span>
            </div>
            <div className={clsx("my-auto")}></div>
            <div>
              <p>
                Dominik has written a dissertation on online marketing and SEO.
                He is an avid React and C# developer and works on pretty much
                any software idea that comes to his mind.
              </p>
            </div>
          </div>
          <div
            className={clsx(
              "flex",
              "flex-col",
              "rounded",
              "shadow",
              "py-4",
              "px-8",
              "items-center",
              "justify-between",
              "bg-red-50",
            )}>
            <div
              className={clsx(
                "inline-block",
                "w-36",
                "h-36",
                "rounded-full",
                "overflow-hidden",
                "mb-4",
                "ring-4",
                "ring-red-100",
              )}>
              <Img
                className={clsx("object-cover")}
                fluid={raviImg?.childImageSharp.fluid}
              />
            </div>
            <div className={clsx("text-center", "mb-6")}>
              <span className={clsx("font-extrabold")}>RaviAnand</span>
              <br />
              <span>Mohabir</span>
            </div>
            <div className={clsx("w-full")}>
              <span className={clsx("text-2xl")}>Developer</span>
              <br />
              <span>CTO</span>
            </div>
            <div className={clsx("my-auto")}></div>
            <div>
              <p>
                RaviAnand is an experienced developer and expert at software
                architecture and design. He is familiar with various
                technologies and can help bring your next software project to
                life in a professional manner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
